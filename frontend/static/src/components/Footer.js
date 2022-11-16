
import "../../styles/Footer.css"
import { AiOutlineCopyrightCircle } from "react-icons/ai";

function Footer() { 
  return (
    <footer className="footer-container">
      <div className="name-tag">On Deck Sports App</div>
      <div className="copyright">
        <AiOutlineCopyrightCircle /> 
      </div>
    </footer>
  );
}

export default Footer;