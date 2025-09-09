import s from './contact.module.css'

export default function Contact(){


    return(
        <>
        <div className={s.contactPageContainer}>
               <span className="h6">Get in Touch</span>
               <h1>Contact Us Today</h1>
               <p>Ready to discuss your security and labour service needs? Get in touch with our team htmlFor a free consultation and customized quote.</p>
            </div>
            <div className={s.contact}>
                <div className={s.quote}>

                <form action="/">
                    <div className="name">
                        <h5 >Full Name</h5>
                        <input type="text" name="name" placeholder='Enter the name'/>
                    </div>
                    <div className="mail">
                        <h5 htmlFor="email">mail</h5>
                        <input type="mail" name="mail"  placeholder='Enter mail'/>
                    </div>
                    <div className="ph">
                    <h5 htmlFor="phone">Phone Number</h5>
                    <input type="text" name='number' placeholder='Enter Number' />
                    </div>
                    <div className="company">
                        <h5 htmlFor="company">company</h5>
                        <input type="text" name='company' placeholder='Enter company Name'/>
                    </div>
                    <h5 htmlFor="service">Service Needed</h5>
                    <select name="service" id="service">
                        <option value="" disabled selected hidden>Select your option</option>
                        <option value="corporate security">corporate security</option>
                        <option value="construction site security">construction site security</option>
                        <option value="Event security">Event security</option>
                        <option value="construction Labour">construction Labour</option>
                        <option value="warehouse and logistics">warehouse and logistics</option>
                        <option value="general labour">general labour</option>
                        <option value="multiple services">multiple services</option>
                        <option value="Other">Other</option>
                    </select>
                    <div className="projectDetails">
                        <h5 htmlFor="projectDeatils">Project Details</h5>
                        <textarea type="text" placeholder='Please describe your project requirements, timeline, and any specific needs...' rows="4" cols="100"/>
                    </div>

                </form>
                </div>
            </div>
        </>
    )
}