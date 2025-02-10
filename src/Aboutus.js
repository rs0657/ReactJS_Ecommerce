import './Aboutus.css'; // Import your about us section CSS file
import aboutUsImage from './aboutsus.png'; // Replace with the path to your actual image

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h2>About Us</h2>
      <p>We are passionate about providing fresh and high-quality products to our customers.</p>
      <img className="about-us-image" src={aboutUsImage} alt="About Us" />
    </div>
  );
}

export default AboutUs;
