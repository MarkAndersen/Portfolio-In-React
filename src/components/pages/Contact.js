import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function Contact() {
    //assigning state variables, and setting inital states
    const [name, setName] = useState('');
    const [email, setEmail]= useState('');
    const [message, setMessage] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'email') {
            setEmail(inputValue);
    } else if (inputType ==='name') {
            setName(inputValue);
    } else {
        setMessage(inputValue);
    };
};

    const handleFormSubmit = (e) => {
        //prevents page reload upon submission
        e.preventDefault();

        if (!validateEmail(email) || !name || !message) {
            alert(`Email Invalid and no name or message submitted!`)
            setEmail('');
            setName('');
            setMessage('');
            return;
        }

        alert(`Thanks for your question ${name}!`)

        setEmail('');
        setName('');
        setMessage('');
    }

    return(
        //form fields
        <div>
        <p>If you have a question please fill out the form below!</p>
        <form className="form">
            <input
              value={name}
              name="name"
              onChange={handleInputChange}
              type="text"
              placeholder="name"
            />
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="email"
          />
          <input
            value={message}
            name="message"
            onChange={handleInputChange}
            type="text"
            placeholder="message"
          />
          <button type="button" onClick={handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
    
}

export default Contact;