import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone,faEnvelope,faLocationDot } from "@fortawesome/free-solid-svg-icons";
import './footer.css';
import Link from "next/link";


export default function Footer() {



    return(
        <>
            <footer>
                <div className="footer-top">
                    <div className="company-info">
                        <img src="./logo1.svg" alt="Logo"/>
                        <h4>Your trusted partner for comprehensive security and labour services. We connect businesses with reliable, professional service providers across all industries.</h4>
                        <div className="ph"><FontAwesomeIcon icon={faPhone} className="faIcons-footer"/>91+ 9113662500</div>
                        <div className="mail"><FontAwesomeIcon icon={faEnvelope} className="faIcons-footer"/></div>
                        <div className="address"><FontAwesomeIcon icon={faLocationDot} className="faIcons-footer"/><address>#37/8, Chikkanahalli Main Road, Opp. Basaveshwara Layout, Yelwala, Mysuru - 571130</address></div>
                    </div>
                    <div className="quick-links">
                        <h3>Quick Links</h3>
                        <Link href="/" className="links">Home</Link>
                        <Link href="/services" className="links">Services</Link>
                        <Link href="/about" className="links">About Us</Link>
                        <Link href="/contact" className="links">Contact</Link>
                    </div>
                    <div className="services-list">
                        <h3>Our Services</h3>
                        <li>Security Services</li>
                        <li>Labour Solutions</li>
                        <li>Event Security</li>
                        <li>Construction Labour</li>
                        <li>Consulting</li>
                    </div>
                </div>
                <div className="line"></div>
                <h6>© 2024 SecureLabour Solutions. All rights reserved.</h6>
            </footer>
        </>
    )
}