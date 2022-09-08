import './Form.css'
import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';

const Form = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_guqs4ze', 'template_ivogecq', form.current, '0fK-lpYmQVo0u6AC0')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
     });
     e.target.reset();
    }


  return (
    <div className='form'>
        <form ref={form} onSubmit={sendEmail}>
            <label>Your Name</label>
            <input type='text' name="name"></input>
            <label>Email</label>
            <input type='email' name="email"></input>
            <label>Subject</label>
            <input type='text' name="subject"></input>
            <label>Message</label>
            <textarea rows='6' placeholder='Type your message here' name="message"/>
            <button className='btn' >Submit</button>
        </form>
    </div>
  );
}

export default Form;