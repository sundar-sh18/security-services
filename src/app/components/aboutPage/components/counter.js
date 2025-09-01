import CountUp from "../../../reactBits/CountUp/CountUp"
import style from "./counter.module.css"
import * as motion from "motion/react-client"

export default function Counters() {



    return(
        <><div className={style.counters}>
            
            <div className={style.projects}><CountUp
                            from={0}
                            to={10}
                            separator=","
                            direction="up"
                            duration={2}
                            className={style.countUpText}
                            />
            <span className={style.span}>+</span><h5 className={style.h5}>Years of Experience</h5></div>
            <div className={style.clients}><CountUp
                            from={0}
                            to={500}
                            separator=","
                            direction="up"
                            duration={3}
                            className={style.countUpText}
                            /><span className={style.span}>+</span><h5 className={style.h5}>successful Projects</h5></div>
            <div className={style.date}><CountUp
                            from={0}
                            to={50}
                            separator=","
                            direction="up"
                            duration={4}
                            className={style.countUpText}
                            /><span className={style.span}>+</span><h5 className={style.h5}>Corporate Clients</h5></div>
            <div className={style.percent}><CountUp
                            from={0}
                            to={99}
                            separator=","
                            direction="up"
                            duration={4}
                            className={style.countUpText}
                            /><span className={style.span}>+</span><h5 className={style.h5}>Personnel Deployed</h5></div>
        
        </div>
        
        </>
    )

}