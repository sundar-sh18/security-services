import Link from "next/link";
import style from './footerAbove.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";


export default function FooterAbove({head,subhead,btn}){




    return(
        <>
            <div className={style.customSolution}>
                <h1>{head}</h1>
                <h4>{subhead}</h4>
                <div className="btns">
                    <button style={{backgroundColor:"var(--primary)", color: "var(--font-color)"}}><Link href="/contact">{btn}<FontAwesomeIcon icon={faArrowRight} className='arrow' /></Link></button>
                </div>
            </div>
        </>
    )
}