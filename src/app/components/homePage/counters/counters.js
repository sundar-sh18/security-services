import CountUp from "../../../reactBits/CountUp/CountUp"
import style from "./counters.module.css"
import * as motion from "motion/react-client"

export default function Counters() {



    return(
        <><div className={`${style.counters} counters`} >
            <motion.div initial={{ transform: "translateY(50px)", opacity: 0 }}
                    animate={{transform: "translateY(0px)", opacity: 1}}
                            transition={{
                                            duration: 1,
                                            delay: 1,
                                            scale: { type: "spring", visualDuration: 0.8, bounce: 0.5 }}} 
                    className={`${style.counterStack} counterStack`}>
            <div className={style.projects}><CountUp
                            from={0}
                            to={500}
                            separator=","
                            direction="up"
                            duration={2}
                            className={style.countUpText}
                            />
            <span className={style.span}>+</span><h5 className={style.h5}>Projects Completed</h5></div>
            <div className={style.clients}><CountUp
                            from={0}
                            to={50}
                            separator=","
                            direction="up"
                            duration={3}
                            className={style.countUpText}
                            /><span className={style.span}>+</span><h5 className={style.h5}>Trusted Clients</h5></div>
            <div className={style.date}><CountUp
                            from={0}
                            to={24}
                            separator=","
                            direction="up"
                            duration={4}
                            className={style.countUpText}
                            /><span className={style.spanSlash}>/</span><CountUp
                            from={0}
                            to={7}
                            separator=","
                            direction="up"
                            duration={4}
                            className={style.countUpText}
                            /><h5 className={style.h5}>Support Available</h5></div>
            <div className={style.percent}><CountUp
                            from={0}
                            to={99}
                            separator=","
                            direction="up"
                            duration={4}
                            className={style.countUpText}
                            /><span className={style.span}>%</span><h5 className={style.h5}>Client Satisfaction</h5></div>
        </motion.div>
        </div>
        
        </>
    )

}