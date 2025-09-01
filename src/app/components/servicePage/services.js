import Labour from './components/LabourTypes/labour';
import SecurityTypes from './components/securityTypes/securityTypes';
import style from './services.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';

export default function Services(){



    return (
        <>
            <div className={style.servicePageContainer}>
               <span className="h6">Comprehensive Service Portfolio</span>
               <h1>Our Professional Services</h1>
               <p>From security solutions to labour services, we provide comprehensive professional services tailored to meet your specific business requirements.</p>
            </div>
            <div className={style.securityTypes}>
                <h1>Security Services</h1>
                <h4>Professional security solutions to protect your assets, property, and people.</h4>
                <div className={style.typesSecurity}>
                    <SecurityTypes/>
                </div>
                
            </div>
            <div className={style.labourTypes}>
                <h1>Labour Solutions</h1>
                <h4>Skilled and reliable workforce solutions for all your project needs.</h4>
                <div className={style.typesLabour}>
                    <Labour/>
                </div>
            </div>
            <div className={style.serviceProcess}>
                <h1>Our Service Process</h1>
                <h4>Simple, transparent, and efficient service delivery process.</h4>
                <div className={style.process}>
                    <div>
                        <h4 className={style.round}>1</h4>
                        <h4>Consultation</h4>
                        <p>We discuss your requirements and assess your needs.</p>
                    </div>
                    <div>
                        <h4 className={style.round}>2</h4>
                        <h4>Custom Quote</h4>
                        <p>Receive a detailed, competitive quote tailored to your project.</p>
                    </div>
                    <div>
                        <h4 className={style.round}>3</h4>
                        <h4>Service Delivery</h4>
                        <p>Professional service delivery with ongoing support.</p>
                    </div>
                    <div>
                        <h4 className={style.round}>4</h4>
                        <h4>Quality Assurance</h4>
                        <p>Continuous monitoring and quality control throughout.</p>
                    </div>
                    
                </div>
            </div>
            <div className={style.customSolution}>
                <h1>Need a Custom Solution?</h1>
                <h4>Contact us to discuss your specific requirements and get a personalized quote.</h4>
                <div className="btns">
                    <button style={{backgroundColor:"var(--primary)", color: "var(--font-color)"}}><Link href="/contact">Get Custom Quote<FontAwesomeIcon icon={faArrowRight} className='arrow' /></Link></button>
                </div>
            </div>
        </>
    )
}