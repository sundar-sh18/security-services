'use client';
import './main.css';
import Counters from "../counters/counters";
import * as motion from "motion/react-client"
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Services from '../coreServices/services';

export default function Main(){


    return(
        <>
        <div className="main">
            <div className="main-content">
                <motion.div initial={{ transform: "translateY(20px)", opacity: 0 }}
                            animate={{ transform: "translateY(0px)", opacity: 1 }}
                            transition={{   duration: 1,
                                            scale: { type: "spring", visualDuration: 1, bounce: 0.5 },}} 
                            className='p-h6' >
                                <span className="h6">Trusted Security & Labour Solutions</span>
                </motion.div>
                <motion.div initial={{ transform: "translateY(50px)", opacity: 0 }}
                            animate={{ transform: "translateY(0px)", opacity: 1 }}
                            transition={{
                                            duration: 1,
                                            delay: 0.2,
                                            scale: { type: "spring", visualDuration: 1, bounce: 0.5 }}} 
                            className="h1"><h1>Professional Services You Can <span>Trust</span></h1>
                </motion.div>
                <motion.div initial={{ transform: "translateY(50px)", opacity: 0 }}
                            animate={{ transform: "translateY(0px)", opacity: 1 }}
                            transition={{
                                duration: 1,
                                delay:0.4,
                                scale: { type: "spring", visualDuration: 1, bounce: 0.5 }}}>
                                    <p>Connect with reliable security and labour service providers. We deliver professional solutions tailored to your business needs with guaranteed quality and competitive pricing.</p>
                </motion.div>
                <motion.div initial={{ transform: "translateY(50px)", opacity: 0 }}
                            animate={{ transform: "translateY(0px)", opacity: 1 }}
                            transition={{
                                duration: 1,
                                delay:0.6,
                                scale: { type: "spring", visualDuration: 1, bounce: 0.5 }}} 
                            className='btns'>
                        <button>
                            <Link href="/pricing">Get Free Quote<FontAwesomeIcon icon={faArrowRight} className='arrow1' /></Link>
                        </button>
                        <button>
                            <Link href="/services">View Services<FontAwesomeIcon icon={faArrowRight} className='arrow1' /></Link>
                        </button>
                </motion.div>
            <div></div>
            </div>
        </div>
        <Counters/>
        <Services/>
        </>
    )
}