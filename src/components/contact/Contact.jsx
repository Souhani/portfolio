import React, { useEffect, useState } from "react";
import './contact.css'
import { FaEnvelopeCircleCheck } from "react-icons/fa6";
import { MdError } from "react-icons/md";
import HeaderSocials from "../home/HeaderSocials";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [toast, setToast] = useState(null);
  const [isSucess, setIsSucess] = useState(null)
  const [showToast, setShowToast] = useState(false);
  const [isLoading, setIsLoading] = useState(false)

  const sendForm = (e) => {
    setIsLoading(true)
    e.preventDefault();
    fetch("https://fierce-beyond-09316-99ad80c8c914.herokuapp.com/newform", {
      method: "POST",
      headers: {"Content-Type" : "application/json"},
      body:JSON.stringify( {
        name,
        email,
        subject,
        message
      })
    }).then(res => res.json())
      .then(
      (res) => {
        if(res.success) {
          setShowToast(true)
          setIsSucess(true)
          setName("");
          setEmail("");
          setSubject("");
          setMessage("");
          setToast(res.message||"succeeded");
          setTimeout(() => {
            setShowToast(false);
          }, 5000)
        } else {
            setShowToast(true)
            setIsSucess(false)
            setToast(res.message||"failed")
            setTimeout(() => {
              setShowToast(false);
            }, 5000)
        }
        setIsLoading(false)
      }
    ).catch(
    (err) => {
      console.log(err)
      setIsLoading(false) 
    }
    );
  };

  return (
     <section className="contact container section" id="contact">
      {showToast && <div className={isSucess ? "toastSucess" : "toastError"}>{isSucess ? <FaEnvelopeCircleCheck size={30} /> : <MdError size={30} /> } {toast}</div>}
      <h2 className="section__title">Get In Touch</h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">
            Let's talk about everything👋!
          </h3>
          <p className="contact__details">Don't like forms?
         </p>
         <p className="contact__details">Send me an email:</p>
         <a className="contact_links" href="mailto:souhanikarim1999@gmail.com">souhanikarim1999@gmail.com</a>
         <p className="contact__details">Or call me: </p>
         <a className="contact_links" href="tel:+212 659419845">+212 659419845</a>
         <div>
          <HeaderSocials />
         </div>
        </div>

        <form onSubmit={(e) => sendForm(e)} className="contact__form">
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input type="text" className="contact__form-input" placeholder="Insert your name" value={name} onChange={(e)  => {setName(e.target.value)}} required={true} />
            </div>

            <div className="contact__form-div">
              <input type="email" className="contact__form-input" placeholder="Insert your email" value={email} onChange={(e)  => {setEmail(e.target.value)}} required={true}/>
            </div>
          </div>

          <div className="contact__form-div">
              <input type="text" className="contact__form-input" placeholder="Insert your subject" value={subject} onChange={(e)  => {setSubject(e.target.value)}} required={true}/>
          </div>

          <div className="contact__form-div contact__form-area">
            <textarea name="" id="" cols="30" rows="10" className="contact__form-input" placeholder="Write your message" value={message} onChange={(e)  => {setMessage(e.target.value)}} required={true}></textarea>
           </div>

           <button className="btn">{isLoading ? "Wait..." : "Send Message"}</button>
        </form>
      </div>
     </section>
     )
}

export default Contact;