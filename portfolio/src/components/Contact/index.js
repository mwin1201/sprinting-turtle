import React, { useState } from "react";
import { validateEmail } from "../../assets/utils/helpers";

function Contact() {
    const [formState, setFormState] = useState({name: "", email: "", message: ""});
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState("");

    function handleChange(e) {
        if (e.target.name === "email") {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage("Your email is invalid");
            } else {
                setErrorMessage("");
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required`);
            } else {
                setErrorMessage("");
            }
        }
        if (!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value });
        }
    };

    function handleSubmit(e) {
        e.preventDefault();
    };

    return(
        <section className="contact">
            <div className="title">
                <h2>Contact</h2>
            </div>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" defaultValue={name} onBlur={handleChange}></input>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" defaultValue={email} onBlur={handleChange}></input>
                </div>
                <div>
                    <label htmlFor="message">Message</label>
                    <textarea name="message" rows="8"  defaultValue={message} onBlur={handleChange}></textarea>
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button type="submit">Submit</button>
            </form>
            <div className="title">
                <h2>Personal Email</h2>
                <p>Feel free to email me at <a href="mailto:max_winter94@outlook.com">max_winter94@outlook.com</a></p>
            </div>
        </section>
    );
};

export default Contact;