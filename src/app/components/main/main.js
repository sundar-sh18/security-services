'use client';
import './main.css';
import * as motion from "motion/react-client"
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Main(){


    return(
        <>
        <div className="main">
            <div className="main-content">
                <div className='p-h6' ><span className="h6">Trusted Security & Labour Solutions</span></div>
            <motion.div initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }} className="h1"><h1>Professional Services You Can <span>Trust</span></h1></motion.div>
            <motion.div initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:2,scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },}}><p>Connect with reliable security and labour service providers. We deliver professional solutions tailored to your business needs with guaranteed quality and competitive pricing.</p></motion.div>
            <div className='btns'>
                <button><Link href="/pricing">Get Free Quote</Link><FontAwesomeIcon icon={faArrowRight} className='arrow' /></button>
                <button>
                    <Link href="/services">View Services</Link><FontAwesomeIcon icon={faArrowRight }  className='arrow' /></button>
            </div>
            <div></div>
            </div>
        </div>
        </>
    )
}