import { Link } from "react-router-dom";
import "./footer.scss";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footerBody">
                <div className="footerColumn">
                    <h2>Blog</h2>
                </div>
                <div className="footerColumn">
                    <h1>Contact Us</h1>
                    <p>Write for us our just say Hello</p>
                    <Link to="#" className="polyblogMail">info@polyblog.com</Link>
                </div>
            </div>
            <div className="footerBottom">
                <div className="footerOverlay"></div>
                Copyright @ Polyblog 2021
            </div>
        </div>
    )
}

export default Footer
