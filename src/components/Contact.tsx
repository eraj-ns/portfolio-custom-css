import { MdOutlineAttachEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import React, { useState } from "react";
import "@/app/style/contact.css";





const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = event.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();  // To prevent the default form submission
    // Add form data processing logic here (backend or email sending)
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div id="contact" className="contact-container">
        <div className="contact-grid md:grid-cols-2">
          {/* Contact Info Section */}
          <div className="contact-space">
            <h2 className="contact-heading" data-aos="zoom-in-up">
              Get in touch
            </h2>
            <p className="contact-text" data-aos="zoom-in-up">
              Drop me a line, give me a call, or send me a message by submitting the form.
            </p>

            <div className="contact-flex" data-aos="zoom-in-up">
              <MdOutlineAttachEmail size={30} /> 
              <a href="mailto:xyz@gmail.com">xyz@gmail.com</a>
            </div>
            <div className="contact-flex" data-aos="zoom-in-up">
              <FaPhoneVolume size={30} /> 
              <a href="tel:+02100000000">(021) 000-0000</a>
            </div>
          </div>
          <div className="contact-flex" data-aos="zoom-in-up">
              <FaFacebookSquare size={30} /> 
              <a >Eraj Naz Shaikh</a>
            </div>

          {/* Contact Form Section */}
          <div className="contact-space">
            <div className="form" data-aos="zoom-in-up">
              <label htmlFor="name">Name</label>
              <input 
                type="text" 
                className="input-field" 
                id="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="form" data-aos="zoom-in-up">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                className="input-field" 
                id="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="form" data-aos="zoom-in-up">
              <label htmlFor="msg">Message</label>
              <textarea 
                className="textarea-field" 
                id="msg" 
                rows={8} 
                value={formData.message} 
                onChange={handleChange} 
                required 
              ></textarea>
            </div>

            <button className="button" data-aos="zoom-in-up" type="submit">
              Send
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Contact;
// const Contact = () => {
//   return (
//     <>
//     <div id="contact" >
//       <section>
//   <div>
//    <h1>Get In Touch</h1>
//    <p>Drop me a line. give me a call or send me a message by submitting the from</p>
//    <h3> <MdOutlineAttachEmail /> eraj.1234.naz@gmail.com</h3>
//    <h3> <FaPhoneVolume /> 03491942771</h3>
//    <h3> <FaFacebookSquare /> Eraj Naz Shaikh </h3>
//   </div>
//   <div>
//     <div>
//     <div>
//         <label htmlFor="name">
//           Name
//         </label>
//         <input
//           type="name"
//           id="name"
//           name="name"
//         />
//       </div>
//       <div>
//         <label htmlFor="email">
//           Email
//         </label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//         />
//       </div>
//       <div>
//         <label htmlFor="message">
//           Message
//         </label>
//         <textarea
//           id="message"
//           name="message"
//           defaultValue={""}
//         />
//       </div>
//       <button>
//         Button
//       </button>
//     </div>
//   </div>
// </section>
//     </div>
//     </>
//   )
// }

// export default Contact




