"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShield, faPeopleGroup, faMedal, faBullseye } from "@fortawesome/free-solid-svg-icons";
import Counters from "./components/counter";
import './about.css'

export default function About(){

    const core = [
        {
            id: 1,
            logo: <FontAwesomeIcon icon={faShield} className="icon"/>,
            value: "Security First",
            desc: "We prioritize the safety and security of our clients above all else, ensuring comprehensive protection."
        },
        {
            id:2,
            logo: <FontAwesomeIcon icon={faPeopleGroup} className="icon"/>,
            value: "Professional Excellence",
            desc: "Our team consists of highly trained professionals committed to delivering exceptional service quality."
        },
        {
            id:3,
            logo: <FontAwesomeIcon icon={faMedal} className="icon"/>,
            value: "Trusted Reliability",
            desc: "With years of experience, we have built a reputation for dependable and consistent service delivery."
        },
        {
            id:4,
            logo: <FontAwesomeIcon icon={faBullseye} className="icon"/>,
            value: "Client-Focused",
            desc: "We tailor our services to meet the unique needs and requirements of each client and project."
        }
    ]

    return(
        <>
            <div className="service-page-container">
               <span className="h6">About SecureLabour Solutions</span>
               <h1>Your Trusted Security & Labour Partner</h1>
               <p>For over a decade, we have been connecting businesses with reliable, professional security and labour services. Our commitment to excellence and client satisfaction has made us a leader in the industry.</p>
            </div>
            <div className="story">
                
                <div className="story-about">
                    <h1>Our Story</h1>
                        <p>Founded in 2014, SecureLabour Solutions began with a simple mission: to provide businesses with access to reliable, professional security and labour services. What started as a small local operation has grown into a trusted partner for companies across multiple industries.</p>
                        <p>Our founders recognized the challenges businesses faced in finding qualified, trustworthy personnel for their security and labour needs. By focusing on rigorous vetting, comprehensive training, and exceptional customer service, we built a reputation for excellence that continues to drive our growth.</p>
                        <p>Today, we serve over 50 corporate clients and have successfully completed more than 500 projects, from small-scale security assignments to large construction labour contracts.</p>
                    
                    
                    
                </div>
                <div className="counter-container">
                    <Counters/>
                </div>
                
            </div>
            <div class="core-values-container">
                <h1>Our Core Values</h1>
                <h4 style={{textAlign:'center'}}>The principles that guide everything we do and define who we are as a company.</h4>
                <div class="core-values">
                    {core.map((val)=>(<div key={val.id} className="values">
                        {val.logo}
                        <h4>{val.value}</h4>
                        <p>{val.desc}</p>
                    </div>))}
                </div>
            </div>
            <div class="mission-vision">
                <div class="mission">
                    <h2><FontAwesomeIcon icon={faBullseye} color="var(--secondary)" className="icon"></FontAwesomeIcon>Our Mission</h2>
                    <p>To provide businesses with access to the highest quality security and labour services through a network of thoroughly vetted, trained, and reliable professionals. We are committed to exceeding client expectations while maintaining the highest standards of safety, professionalism, and integrity.</p>
                </div>
                <div class="vision">
                    <h2><FontAwesomeIcon icon={faMedal} color="gold" className="icon"></FontAwesomeIcon>Our Vision</h2><p>To be the leading provider of security and labour solutions, recognized for our unwavering commitment to quality, innovation, and client satisfaction. We envision a future where businesses can focus on their core operations, knowing their security and staffing needs are in capable hands.</p>
                </div>
            </div>
        </>
    )
}