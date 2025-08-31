import './services.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as motion from "motion/react-client"
import { faShield,faCircleCheck,faUsers,faClockRotateLeft,faMedal,faStar, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';
import Link from "next/link";
import { delay } from 'motion';


export default function Services() {

    const [stars,setStars] = useState([])

    const[feedbacks,setFeedbacks] = useState([
        {
            id:1,
            rating: 5,
            comments: "SecureLabour Solutions provided excellent security and labour services for our major construction project. Professional, reliable, and cost-effective.",
            name: "Saraj Johnson",
            company: "ABC Construction"
        },
        {
            id:2,
            rating:4,
            comments: "SecureLabour Solutions provided excellent security and labour services for our major construction project. Professional, reliable, and cost-effective.",
            name: "Saraj Johnson",
            company: "ABC Construction"
        },
    ])



   

    return(
        <>
        <motion.div  initial="offscreen"
            whileInView="onscreen"
                     className="services-container"> 
            <motion.header>
                <h1>Our Core Services</h1>
                <h4>Comprehensive security and labour solutions designed to meet your specific business requirements.</h4>
            </motion.header>
            <motion.div initial={{ transform: "translateY(50px)", opacity: 0, filter: "blur(2px)"}}
                        whileInView={{ opacity: 1, transform: "translateY(0px)", filter: "blur(0)" }} 
                        transition={{duration: 1,
                                            delay: 0.2,
                                            scale: { type: "spring", visualDuration: 1, bounce: 0.5}
                        }}  viewport={{
          amount: 0.5, // 50% of element must be in view
          margin: "-40% 0px -20% 0px", // trigger at viewport middle
          once: true, // true = animate only once
        }}className="services">
                <div className="service1">
                        <div className="head">
                            <FontAwesomeIcon icon={faShield} className='faIcon'/>
                            <span>Security Services</span>
                        </div>
                        <p>Professional security personnel for events, construction sites, and corporate facilities.</p>
                        <li><FontAwesomeIcon icon={faCircleCheck} /><span>24/7 Monitoring</span></li>
                        <li><FontAwesomeIcon icon={faCircleCheck} /><span>Trained Personnel</span></li>
                        <li><FontAwesomeIcon icon={faCircleCheck} /><span>Emergency Response</span></li>
                </div>
                <div className="service2">
                    <div className="head">
                            <FontAwesomeIcon icon={faUsers} className='faIcon'/>
                            <span>Labour Solutions</span>
                        </div>
                        <p>Skilled and unskilled labour for construction, warehousing, and industrial projects.</p>
                        <li><FontAwesomeIcon icon={faCircleCheck} /><span>Skilled Workers</span></li>
                        <li><FontAwesomeIcon icon={faCircleCheck} /><span>Flexible Scheduling</span></li>
                        <li><FontAwesomeIcon icon={faCircleCheck} /><span>Quality Assurance</span></li>
                    </div>
            </motion.div>
        </motion.div>
        <div className="why-content">
            <h1>Why Choose SecureLabour Solutions?</h1>
            <div className="quality">
                <motion.div initial={{opacity: 0}}   whileInView={{opacity:1}}   transition={{duration:1, delay:0.4}}  viewport={{
          amount: 0.5, // 50% of element must be in view
          margin: "-30% 0px -20% 0px", // trigger at viewport middle
          once: true, // true = animate only once
        }}>
                    <FontAwesomeIcon icon={faClockRotateLeft} className='faIcon'/>
                    <h5>24/7 Availability</h5>
                    <p>Round-the-clock support and services to meet your urgent requirements.</p>
                </motion.div>
                <motion.div initial={{opacity: 0}}   whileInView={{opacity:1}}   transition={{duration:1, delay:0.6}}  viewport={{
          amount: 0.5, // 50% of element must be in view
          margin: "-30% 0px -20% 0px", // trigger at viewport middle
          once: true, // true = animate only once
        }}>
                    <FontAwesomeIcon icon={faMedal} className='faIcon' />
                    <h5>Certified Professionals</h5>
                    <p>All our personnel are thoroughly vetted, trained, and certified.</p>
                </motion.div>
                <motion.div initial={{opacity: 0}}   whileInView={{opacity:1}}   transition={{duration:1, delay:0.8}}  viewport={{
          amount: 0.5, // 50% of element must be in view
          margin: "-30% 0px -20% 0px", // trigger at viewport middle
          once: true, // true = animate only once
        }}>
                    <FontAwesomeIcon icon={faCircleCheck} className='faIcon'/>
                    <h5>Quality Guaranteed</h5>
                    <p>We stand behind our work with comprehensive quality assurance.</p>
                </motion.div>
            </div>
        </div>
        <div className="feedback-container">
            <h1>What Our Clients Say</h1>
            <h4>Don't just take our word for it - hear from our satisfied clients.</h4>
            <div className="feedbacks">
                {feedbacks.map((feedback)=>(<div key={feedback.id} className='feedback'>
                    <div>{[...Array(feedback.rating)].map((_,inx)=>(<FontAwesomeIcon key={inx} icon={faStar} style={{color:'orange'}} className='star'/>))}</div>
                    <p>"{feedback.comments}"</p>
                    <h5>{feedback.name}</h5>
                    <p>{feedback.company}</p>
                </div>))}
            </div>
        </div>
        <div className="main-contact">
            <h1>Ready to Get Started?</h1>
            <h4>Contact us today for a free consultation and customized quote.</h4>
            <div className="btns">
                <button><Link href="/contact">Get Free Quote<FontAwesomeIcon icon={faArrowRight} className='arrow1' /></Link></button>
                <button><Link href="/services">View All Services<FontAwesomeIcon icon={faArrowRight} className='arrow1' /></Link></button>
            </div>
        </div>
        </>
    )
}


