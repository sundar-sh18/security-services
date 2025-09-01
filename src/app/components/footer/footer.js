import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone,faEnvelope,faLocationDot } from "@fortawesome/free-solid-svg-icons";
import style from './footer.module.css';
import Link from "next/link";


export default function Footer() {



    return(
        <>
            <footer className={style.footer}>
                <div className={style.footerTop}>
                    <div className={style.companyInfo}>
                        <img src="./logo1.svg" alt="Logo"/>
                        <h4>Your trusted partner for comprehensive security and labour services. We connect businesses with reliable, professional service providers across all industries.</h4>
                        <div className={style.ph}><FontAwesomeIcon icon={faPhone} className={style.faIconsFooter}/>91+ 9113662500</div>
                        <div className={style.mail}><FontAwesomeIcon icon={faEnvelope} className={style.faIconsFooter}/></div>
                        <div className={style.address}><FontAwesomeIcon icon={faLocationDot} className={style.faIconsFooter}/><address>#37/8, Chikkanahalli Main Road, Opp. Basaveshwara Layout, Yelwala, Mysuru - 571130</address></div>
                    </div>
                    <div className={style.quickLinks}>
                        <h3>Quick Links</h3>
                        <Link href="/" className={style.links}>Home</Link>
                        <Link href="/services" className={style.links}>Services</Link>
                        <Link href="/about" className={style.links}>About Us</Link>
                        <Link href="/contact" className={style.links}>Contact</Link>
                    </div>
                    <div className={style.servicesList}>
                        <h3>Our Services</h3>
                        <li>Security Services</li>
                        <li>Labour Solutions</li>
                        <li>Event Security</li>
                        <li>Construction Labour</li>
                        <li>Consulting</li>
                    </div>
                </div>
                <div className={style.line}></div>
                <h6>© 2024 SecureLabour Solutions. All rights reserved.</h6>
            </footer>
        </>
    )
}