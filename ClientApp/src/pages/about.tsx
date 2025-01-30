import Navbar from "../components/Navbar/Navbar";
import "./about.css";

export default function About() {
  return (
    <div>
      <Navbar />
      <div className="aboutContainer">
        <div className="aboutTextContainer">
          <h2 className="aboutHeading">About Us</h2>
          <p className="aboutP">
            This is a placeholder for the about us page content. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Deleniti.
          </p>
        </div>
        <div className="aboutImageContainer">
          <img
            src="/assets/img1.jpg"
            alt="About image"
            className="aboutImage"
          />
        </div>
      </div>
    </div>
  );
}
