import "../../css/copyclip.css"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer,toast } from "react-toastify";
import {EmailService} from "../Secret/emailservices";
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
    const [btnload,setbtnload]=React.useState(false);
    const emailkeys=new EmailService();
    const ToastS=(Message:string)=>toast.success(Message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
        const ToastE=(Message:string)=>toast.error(Message, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
  const copyEmail = () => {
    const email = "dreamdesignarchitects.here@gmail.com";
    navigator.clipboard
      .writeText(email)
      .then(() => {
        console.log("copied email")
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const form:any = useRef();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const sendEmail = (e:any) => {
    e.preventDefault();
    setbtnload(true);
    emailjs.sendForm(emailkeys.ServiceID(), emailkeys.TemplateID(), form.current, emailkeys.PublicKey())
      .then(() => {
        setbtnload(false);

        ToastS("Message sent, we will reach out immediately")
      }, () => {
        setbtnload(false);
        ToastE("Service Expire ,Please contact using contact number")
      });
  };

  return (
    <div>
        <ToastContainer/>
      <div className="container-fluid py-5 mb-5" style={{ marginTop: "50px" }}>
        <div className="container">
          <div
            className="text-center mx-auto pb-5 wow fadeIn"
            data-wow-delay=".3s"
            style={{ maxWidth: "600px" }}
          >
            <h5 className="text-primary">Get In Touch</h5>
            <h1 className="mb-3">Contact for any query</h1>
          </div>
          <div className="contact-detail position-relative p-5">
            <div className="row g-5 mb-5 justify-content-center">
              <div
                className="col-xl-4 col-lg-6 wow fadeIn"
                data-wow-delay=".3s"
              >
                <div
                  className="d-flex bg-light p-3 rounded"
                  data-aos="fade-down"
                >
                  <div
                    className="flex-shrink-0 btn-square bg-secondary rounded-circle"
                    style={{ width: "64px", height: "64px" }}
                  >
                    <i className="fas fa-map-marker-alt text-white"></i>
                  </div>
                  <div className="ms-3">
                    <h4 className="text-primary">Address</h4>
                    <a
                      href="https://maps.app.goo.gl/pPPeYS7FvAT6juJcA"
                      target="_blank"
                      className="h5"
                    >
                      BHARAT NAGAR, BABAL ROAD PANIPAT,132103
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-6 wow fadeIn"
                data-aos="fade-down"
                data-wow-delay=".5s"
              >
                <div className="d-flex bg-light p-3 rounded">
                  <div
                    className="flex-shrink-0 btn-square bg-secondary rounded-circle"
                    style={{ width: "64px", height: "64px" }}
                  >
                    <i className="fa fa-phone text-white"></i>
                  </div>
                  <div className="ms-3">
                    <h4 className="text-primary">Call Us</h4>
                    <a className="h5" href="tel:+0123456789" target="_blank">
                      +91 9896622464
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-6 wow fadeIn"
                data-aos="fade-down"
                data-wow-delay=".7s"
              >
                <div className="d-flex bg-light p-3 rounded">
                  <div
                    className="flex-shrink-0 btn-square bg-secondary rounded-circle"
                    style={{ width: "64px", height: "64px" }}
                  >
                    <i className="fa fa-envelope text-white"></i>
                  </div>
                  <div className="ms-3">
                    <h4 className="text-primary">Email Us</h4>
                    <div style={{display:'flex',alignItems:'center',gap:"10px",justifyContent:"space-between"}}>
                      <a
                       
                        className="h5"
                        href="mailto:dreamdesignarchitects.here@gmail.com"
                        target="_blank"
                      >
                        Click here
                      </a>
                      <button className="copy"  onClick={copyEmail}>
                        <span
                          data-text-end="Copied!"
                          data-text-initial="Copy to clipboard"
                          className="tooltip"
                        ></span>
                        <span>
                          <svg
                            xmlSpace="preserve"
                            viewBox="0 0 6.35 6.35"
                            y="0"
                            x="0"
                            height="20"
                            width="20"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            className="clipboard"
                          >
                            <g>
                              <path
                                fill="currentColor"
                                d="M2.43.265c-.3 0-.548.236-.573.53h-.328a.74.74 0 0 0-.735.734v3.822a.74.74 0 0 0 .735.734H4.82a.74.74 0 0 0 .735-.734V1.529a.74.74 0 0 0-.735-.735h-.328a.58.58 0 0 0-.573-.53zm0 .529h1.49c.032 0 .049.017.049.049v.431c0 .032-.017.049-.049.049H2.43c-.032 0-.05-.017-.05-.049V.843c0-.032.018-.05.05-.05zm-.901.53h.328c.026.292.274.528.573.528h1.49a.58.58 0 0 0 .573-.529h.328a.2.2 0 0 1 .206.206v3.822a.2.2 0 0 1-.206.205H1.53a.2.2 0 0 1-.206-.205V1.529a.2.2 0 0 1 .206-.206z"
                              ></path>
                            </g>
                          </svg>
                          <svg
                            xmlSpace="preserve"
                            viewBox="0 0 24 24"
                            y="0"
                            x="0"
                            height="18"
                            width="18"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            className="checkmark"
                          >
                            <g>
                              <path
                                data-original="#000000"
                                fill="currentColor"
                                d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                              ></path>
                            </g>
                          </svg>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row g-5">
              <div
                className="col-lg-6 wow fadeIn"
                data-wow-delay=".3s"
                data-aos="fade-right"
              >
                <div className="p-5 h-100 rounded contact-map">
                  <iframe
                    className="rounded w-100 h-100"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111235.43022967671!2d76.80822267469114!3d29.39642008533093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390dda457afbe651%3A0x41d3f6feacaa74d4!2sPanipat%2C%20Haryana%2C%20India!5e0!3m2!1sen!2sbd!4v1697950697887!5m2!1sen!2sbd"
                    width="600"
                    height="450"
                    style={{ border: "0" }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
              <div
                className="col-lg-6 wow fadeIn"
                data-wow-delay=".5s"
                data-aos="fade-left"
              >
                <div className="p-5 rounded contact-form">
                     <form ref={form} onSubmit={sendEmail}>
                     <div className="mb-4">
                    <input
                      type="text"
                      name="from_name"
                      className="form-control border-0 py-3"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="email"
                       name='to_email'
                      className="form-control border-0 py-3"
                      placeholder="Your Email"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <textarea
                      className="w-100 form-control border-0 py-3"
                      rows={6}
                      name='message'
                      cols={10}
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <div className="text-start">
                    <button
                    disabled={btnload}
                      className="btn bg-primary text-white py-3 px-5"
                      type="submit"
                    >
                    {btnload?"loading...":"Send Message "}
                    </button>
                  </div>
                     </form>
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
