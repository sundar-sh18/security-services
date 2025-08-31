import Labour from './components/LabourTypes/labour';
import SecurityTypes from './components/securityTypes/securityTypes';
import './services.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';

export default function Services(){



    return (
        <>
            <div className="service-page-container">
               <span className="h6">Comprehensive Service Portfolio</span>
               <h1>Our Professional Services</h1>
               <p>From security solutions to labour services, we provide comprehensive professional services tailored to meet your specific business requirements.</p>
            </div>
            <div className="security-types">
                <h1>Security Services</h1>
                <h4>Professional security solutions to protect your assets, property, and people.</h4>
                <div className="types-security">
                    <SecurityTypes/>
                </div>
                
            </div>
            <div className="labour-types">
                <h1>Labour Solutions</h1>
                <h4>Skilled and reliable workforce solutions for all your project needs.</h4>
                <div className="types-labour">
                    <Labour/>
                </div>
            </div>
            <div className="service-process">
                <h1>Our Service Process</h1>
                <h4>Simple, transparent, and efficient service delivery process.</h4>
                <div className="process">
                    <div>
                        <h4 className='round'>1</h4>
                        <h4>Consultation</h4>
                        <p>We discuss your requirements and assess your needs.</p>
                    </div>
                    <div>
                        <h4 className='round'>2</h4>
                        <h4>Custom Quote</h4>
                        <p>Receive a detailed, competitive quote tailored to your project.</p>
                    </div>
                    <div>
                        <h4 className='round'>3</h4>
                        <h4>Service Delivery</h4>
                        <p>Professional service delivery with ongoing support.</p>
                    </div>
                    <div>
                        <h4 className='round'>4</h4>
                        <h4>Quality Assurance</h4>
                        <p>Continuous monitoring and quality control throughout.</p>
                    </div>
                    
                </div>
            </div>
            <div className="custom-solution">
                <h1>Need a Custom Solution?</h1>
                <h4>Contact us to discuss your specific requirements and get a personalized quote.</h4>
                <div className="btns">
                    <button><Link href="/contact">Get Custom Quote<FontAwesomeIcon icon={faArrowRight} className='arrow1' /></Link></button>
                </div>
            </div>
        </>
    )
}