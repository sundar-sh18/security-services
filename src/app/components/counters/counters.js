import CountUp from '../../reactBits/CountUp/CountUp'
import './counters.css'
import * as motion from "motion/react-client"

export default function Counters() {



    return(
        <><div className="counters">
            <motion.div initial={{ transform: "translateY(50px)", opacity: 0 }}
                    animate={{transform: "translateY(0px)", opacity: 1}}
                            transition={{
                                            duration: 1,
                                            delay: 1,
                                            scale: { type: "spring", visualDuration: 0.8, bounce: 0.5 }}} 
                    className='counter-stack'>
            <div className='projects'><CountUp
                            from={0}
                            to={500}
                            separator=","
                            direction="up"
                            duration={2}
                            className="count-up-text"
                            />
            <span>+</span><h5>Projects Completed</h5></div>
            <div className='clients'><CountUp
                            from={0}
                            to={50}
                            separator=","
                            direction="up"
                            duration={3}
                            className="count-up-text"
                            /><span>+</span><h5>Trusted Clients</h5></div>
            <div className="date"><CountUp
                            from={0}
                            to={24}
                            separator=","
                            direction="up"
                            duration={4}
                            className="count-up-text"
                            /><span>/</span><CountUp
                            from={0}
                            to={7}
                            separator=","
                            direction="up"
                            duration={4}
                            className="count-up-text"
                            /><h5>Support Available</h5></div>
            <div className='percent'><CountUp
                            from={0}
                            to={99}
                            separator=","
                            direction="up"
                            duration={4}
                            className="count-up-text"
                            /><span>%</span><h5>Client Satisfaction</h5></div>
        </motion.div>
        </div>
        
        </>
    )

}