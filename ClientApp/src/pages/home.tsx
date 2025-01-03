import Navbar from "../components/Navbar/Navbar";
import './home.css';

export default function About() {
  return (
    <div>
      <Navbar />
      <div className="headerImageContainer">
        <img src="/assets/img1.jpg" alt="Header image" className="headerImage"/>
      </div>
      <img src="/assets/lumbrela.svg" alt="Lumbrela text" className="headerText"/>
    </div>
  );
}