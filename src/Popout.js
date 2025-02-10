import React from 'react';
import './Popup.css';

function Popout({ arrObjj, popupStatus, popupclose }) {
    if (!popupStatus) return null;

    // Only show items that have both AddedtoCart=1 and orderQ > 0
    const cartItems = arrObjj.filter(item => item.AddedtoCart === 1 && item.orderQ > 0);
    
    console.log('Cart Items:', cartItems); // Debug log

    return (
        <div className='popup'>
            <div className='popup-in'>
                <button onClick={popupclose} className='close'>X</button>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.length > 0 ? (
                            cartItems.map((item, index) => (
                                <tr key={item.c || index}>
                                    <td>{item.desc}</td>
                                    <td>₹{item.cost}</td>
                                    <td>{item.orderQ}</td>
                                    <td>₹{item.cost * item.orderQ}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4">No items in cart</td>
                            </tr>
                        )}
                        {cartItems.length > 0 && (
                            <tr className="total-row">
                                <td colSpan="3">Total:</td>
                                <td>₹{cartItems.reduce((total, item) => total + (item.cost * item.orderQ), 0)}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Popout;
