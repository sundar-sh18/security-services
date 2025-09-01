import CountUp from '../../../reactBits/CountUp/CountUp'
import './counter.css'
import * as motion from "motion/react-client"

export default function Counters() {



    return(
        <><div className="counters">
            
            <div className='projects'><CountUp
                            from={0}
                            to={10}
                            separator=","
                            direction="up"
                            duration={2}
                            className="count-up-text"
                            />
            <span>+</span><h5>Years of Experience</h5></div>
            <div className='clients'><CountUp
                            from={0}
                            to={500}
                            separator=","
                            direction="up"
                            duration={3}
                            className="count-up-text"
                            /><span>+</span><h5>successful Projects</h5></div>
            <div className="date"><CountUp
                            from={0}
                            to={50}
                            separator=","
                            direction="up"
                            duration={4}
                            className="count-up-text"
                            /><span>+</span><h5>Corporate Clients</h5></div>
            <div className='percent'><CountUp
                            from={0}
                            to={99}
                            separator=","
                            direction="up"
                            duration={4}
                            className="count-up-text"
                            /><span>+</span><h5>Personnel Deployed</h5></div>
        
        </div>
        
        </>
    )

}