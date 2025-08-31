'use client'
import Link from 'next/link';
import './nav.css'
import * as motion from 'motion/react-client'
import { useState } from 'react';

export default function Nav(){

    const[active, setActive] = useState(true)


    return(
        <>
            <nav>
                <motion.div initial={{ opacity: 0, transform: "translateX(-50px)"}} animate={{opacity:1,  transform: "translateX(0)"}} transition={{duration: 1}} className="logo"><Link href="/"><img src="/logo1.svg" alt="Logo" style={{width: "150px"}}/></Link></motion.div>
                <div className="routes">
                    <li onClick={() => setActive("/")} style={{ color: active === "/" ? "var(--secondary)" : "black" }}>
                        <Link href="/" >Home</Link>
                    </li>
                    <li onClick={() => setActive("/services")}  style={{ color: active === "/services" ? "var(--secondary)" : "black" }}>
                        <Link href="/services">Services</Link>
                    </li>
                    <li onClick={() => setActive("/about")} style={{ color: active === "/about" ? "var(--secondary)" : "black" }}>
                        <Link href="/about">About</Link>
                    </li>
                    <li onClick={() => setActive("/contact")}   style={{ color: active === "/contact" ? "var(--secondary)" : "black" }}>
                        <Link href="/contact">Contact</Link>
                    </li>
                </div>
                <div className="quote">
                    <Link href="/pricing">get Quote</Link>
                </div>
            </nav>
        </>
    )
}