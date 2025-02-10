import './Contact.css';
import { loginUser, registerUser } from "./api";

const ContactUs = () => {
    return (
     <div className="contact-us-container">
       <h2>Contact Us</h2>
        <p>Have questions or feedback? Feel free to reach out to us.</p>
       <h2>EMAIL:HarvestH@gmail.com</h2>
         <h2>Contact:7680954321</h2>
     </div>
    );
  }
export default ContactUs;