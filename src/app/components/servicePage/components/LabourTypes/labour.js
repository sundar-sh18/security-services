"use client"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { faHelmetSafety, faPeopleGroup, faTruckFast}  from "@fortawesome/free-solid-svg-icons";
import './labour.css';
import Link from 'next/link';


export default function SecurityTypes(){

    const [types,setTypes] = useState([
        {
            id:1,
            logo: <FontAwesomeIcon icon={faHelmetSafety} className="icon" />,
            type: "Construction Labour",
            desc: "Skilled and general construction workers for residential and commercial projects.",
            services: ["Skilled Tradespeople",
                        "General Labourers",
                        "Project Management",
                        "Safety Training"],
            price: 200
        },
        {
            id:2,
            logo: <FontAwesomeIcon icon={faTruckFast} className="icon"/>,
            type: "Warehouse & Logistics",
            desc: "Warehouse workers, forklift operators, and logistics personnel for your operations.",
            services: ["Warehouse Operations",
                        "Inventory Management",
                        "Loading/Unloading",
                        "Quality Control"],
            price: 180
        },
        {
            id:3,
            logo: <FontAwesomeIcon icon={faPeopleGroup} className="icon"/>,
            type: "General Labour",
            desc: "Flexible labour solutions for various industries and temporary staffing needs.",
            services: ["Temporary Staffing",
                        "Seasonal Workers",
                        "Event Staff",
                        "Cleaning Services"],
            price: 150
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