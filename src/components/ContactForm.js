import { sendContactForm } from "@/lib/api";
import React, { useState } from "react";
import { Fade } from "react-reveal";
import CustomAnimation from "./CustomAnimation";

const ContactForm = () => {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [msg, setMsg] = useState(false);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState({
    nameErr: false,
    emailErr: false,
    messageErr: false
  });
  const emailPattern = /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/

  const handleSubmit = async () => {
    setErr({ ...err, nameErr: !details.name, emailErr: !details.email, messageErr: !details.message });
    if(!err.nameErr && !err.emailErr && !err.messageErr) {
      if(!details.name.length < 1 && !details.email.length < 1 && !details.message.length < 1 ) {
      setLoading(true)
      const res = await sendContactForm(details);
      const data = await res.json();
      setMsg(data.success);
      }
    }
  };

  return (
    <div className="contact-form mobile-padding">
      {msg ? (
        <>
          <CustomAnimation
            customClass={"container-message"}
            name={"137680-meditating-rabbit"}
            width={350}
            height={350}
            message={"Thank you for messaging me"}
          />
          <button
            onClick={() => {
              setMsg(false);
              setLoading(false);
              setDetails({...details, name: '', email: '', message: ''})
            }}
          >
            send another message
          </button>
        </>
      ) : (
        <Fade>
          <h1 className="form-heading">Leave me a message</h1>
          <div className="actual-form">
            <div className="form-input-container">
              <input
                className={`form-input ${err.nameErr ? "input-err" : ""}`}
                type="text"
                onChange={(e) => {
                  setDetails({ ...details, name: e.target.value });
                  setErr({ ...err, nameErr: false });
                }}
              />
              <label
                className={
                  details.name
                    ? "form-input-selected"
                    : `form-input-placeholder ${err.nameErr ? 'placeholder-err' : ''}`
                }
              >
                Name
              </label>
            </div>
            <div className="form-input-container">
              <input
                className={`form-input ${err.emailErr ? "input-err" : ""}`}
                type="email"
                onChange={(e) => {
                  setDetails({ ...details, email: e.target.value })
                  setErr({ ...err, emailErr: false });
                }}
              />
              <label
                className={
                  details.email
                    ? "form-input-selected"
                    : `form-input-placeholder ${err.emailErr ? 'placeholder-err' : ''}`
                }
              >
                Email
              </label>
            </div>
            <div className="form-input-container">
              <textarea
                className={`form-input ${err.messageErr ? "input-err" : ""}`}
                rows="10"
                cols="50"
                onChange={(e) => {
                  setDetails({ ...details, message: e.target.value })
                  setErr({ ...err, messageErr: false });
                }}
              />
              <label
                className={
                  details.message
                    ? "form-input-selected"
                    : `form-input-placeholder ${err.messageErr ? 'placeholder-err' : ''}`
                }
              >
                Message
              </label>
            </div>
            {
              loading ? <CustomAnimation name={'141545-shapes-changing-preloader'} width={250} height={250} /> : <button
              className="form-btn"
              onClick={handleSubmit}
            >
              Send Message 
            </button>
            }
              
          </div>
        </Fade>
      )}
    </div>
  );
};

export default ContactForm;
