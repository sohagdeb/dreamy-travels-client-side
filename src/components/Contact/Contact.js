import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div>
            <div id="contact" className="form p-5">
                <h1>Contact Us</h1>


                <input className="form1 mt-3 w-75" type="text" name="fname" id="fname" placeholder="First Name..." /><br />

                <input className="form1 mt-3 w-75" type="text" name="lname" id="lname" placeholder="Last Name..." /><br />

                <input className="form1 mt-3 w-75" type="text" name="email" id="email" placeholder="Email..." /><br />

                <textarea className='mt-3 w-75' name="text" id="" cols="30" rows="10" placeholder="Your Message...."></textarea><br />
                <input className="button2" type="button" value="Submit" />
                <input className="button2" type="reset" value="Reset" />
            </div>
        </div>
    );
};

export default Contact;