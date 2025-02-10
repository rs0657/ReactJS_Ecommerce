import { useState, useEffect } from 'react';
import { fetchProducts, addToCart } from "./api";
import './Productlist.css';
import Popout from './Popout';

export default function Productlist({ receivecartCount, popupStatus, popupclose }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        loadProducts();
    }, []);

    const loadProducts = async () => {
        try {
            const data = await fetchProducts();
            if (data) {
                setProducts(data);
            }
        } catch (err) {
            setError('Failed to load products');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    function handleInc(name) {
        let sampleData = products.map((val) => {
            if (val.desc === name) {
                return { ...val, orderQ: val.orderQ + 1 };
            } else {
                return val;
            }
        });
        setProducts(sampleData);
    }

    function handleDec(name) {
        let sampleData = products.map((val) => {
            if (val.desc === name) {
                if (val.orderQ > 0) {
                    return { ...val, orderQ: val.orderQ - 1 };
                } else {
                    return { ...val, orderQ: 0 };
                }
            } else {
                return val;
            }
        });
    
        setProducts(sampleData);
    }

    async function handleAdd(name) {
        const updatedProducts = products.map((val) => {
            if(val.desc === name) {
                return { ...val, AddedtoCart: val.orderQ > 0 ? 1 : 0 };
            }
            return val;
        });

        setProducts(updatedProducts);

        // Update cart count
        const cartCount = updatedProducts.filter(item => item.AddedtoCart === 1).length;
        console.log('Cart count:', cartCount); // Debug log
        receivecartCount(cartCount);

        try {
            const productToAdd = updatedProducts.find(p => p.desc === name);
            if (productToAdd && productToAdd.orderQ > 0) {
                await addToCart({
                    userId: "temp-user-id",
                    productId: productToAdd._id || name, // Fallback to name if _id not available
                    quantity: productToAdd.orderQ,
                    name: productToAdd.desc,
                    price: productToAdd.cost
                });
            }
        } catch (err) {
            console.error('Failed to sync with database:', err);
        }
    }

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
    if (!products.length) return <div>No products found</div>;

    return (
        <div className='ecommerce'>
            {products.map((val) => {
                    return (
                        <div className={val.c} key={val.c}>
                            <img src={val.img} alt={val.desc} />
                            <h2>{val.desc}</h2>
                            <h3>Rs.{val.cost}</h3>
                            <h2>{val.Quantity}kg</h2>
                            <div>
                            <span>Rs.{val.cost * val.orderQ}</span>
                            <button className="INCREMENT BUTTON" onClick={()=>{handleInc(val.desc)}}>+</button>
                            <span>{val.Quantity * val.orderQ}kg</span>
                            <button className="DECREMENT BUTTON"onClick={()=>{handleDec(val.desc)}} >-</button>
                            </div>
                            <button className="add-to-cart-button" onClick={() => handleAdd(val.desc)}>
                                Add to Cart
                            </button>
                        </div>
                    );
                
            })}
            <Popout 
                arrObjj={products} 
                popupStatus={popupStatus} 
                popupclose={popupclose}
            />
        </div>
    );
}