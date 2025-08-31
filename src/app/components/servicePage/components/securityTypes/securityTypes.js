"use client"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faBuilding, faCamera, faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { faShield}  from "@fortawesome/free-solid-svg-icons";
import './securityTypes.css';
import Link from 'next/link';


export default function SecurityTypes(){

    const [types,setTypes] = useState([
        {
            id:1,
            logo: <FontAwesomeIcon icon={faShield} className="icon" />,
            type: "Corporate Security",
            desc: "Professional security services for office buildings, corporate facilities, and business premises.",
            services: ["Access Control",
                        "Patrol Services",
                        "Incident Response",
                        "Security Consulting"],
            price: 250
        },
        {
            id:2,
            logo: <FontAwesomeIcon icon={faBuilding} className="icon"/>,
            type: "Construction Site Security",
            desc: "Specialized security solutions for construction sites, protecting equipment and materials.",
            services: ["24/7 Site Monitoring",
                        "Equipment Protection",
                        "Theft Prevention",
                        "Safety Compliance"],
            price: 250
        },
        {
            id:3,
            logo: <FontAwesomeIcon icon={faCamera} className="icon"/>,
            type: "Event Security",
            desc: "Comprehensive security services for events, conferences, and special occasions.",
            services: ["Crowd Control",
                        "VIP Protection",
                        "Emergency Planning",
                        "Coordination Services"],
            price: 500
        }

    ])

    return(
        <>
            {types.map((type)=>(
                <div className="service1 service-type" key={type.id}>
                    <div className="head">
                        {type.logo}
                        <span>{type.type}</span>
                    </div>
                    <p>{type.desc}</p>
                    <ul>
                    {type.services.map((service)=>(
                            <li key={service}><FontAwesomeIcon icon={faCircleCheck} /><span>{service}</span></li>
                        ))}
                    </ul>
                    <div className="btns">
                        <button>Starting from ₹{type.price} /hour</button><button><Link href="/contact">Get Quote</Link></button>
                    </div>
                </div>
                ))}
        </>
    )
}