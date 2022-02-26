import React from "react";

function Contact() {
    return(
        <section>
            <form id="contact-form">
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" defaultValue="name"></input>
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" defaultValue="email"></input>
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <input type="text" name="message" defaultValue="message"></input>
                </div>
            </form>
        </section>
    );
};

export default Contact;