import "./Footer.scss";
import { useState, Fragment } from "react";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async () => {
    if (!formData) return;

    setLoading(true);

    const contact = {
      _type: "contact",
      name: name,
      email: email,
      message: message,
    };

    await client.create(contact).then(() => {
      setIsFormSubmitted(true);
      setLoading(false);
    });
  };

  return (
    <Fragment>
      <h2 className="head-text">Chat / Connect with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:kayodeolusi@gmail.com" className="p-text">
            kayodeolusi@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel:+2348056496730" className="p-text">
            +2348056496730
          </a>
        </div>

        {!isFormSubmitted ? (
          <div className="app__footer-form app__flex">
            <div className="app__flex">
              <input
                type="text"
                className="p-text"
                placeholder="Your name"
                value={name}
                onChange={handleChangeInput}
                name="name"
              />
            </div>
            <div className="app__flex">
              <input
                type="text"
                className="p-text"
                placeholder="Your Email"
                value={email}
                onChange={handleChangeInput}
                name="email"
              />
            </div>
            <div>
              <textarea
                className="p-text"
                name="message"
                value={message}
                cols="30"
                rows="10"
                placeholder="Your message"
                onChange={handleChangeInput}
              ></textarea>
            </div>
            <button type="button" className="p-text" onClick={handleSubmit}>
              {loading ? "Sending" : "Send Message"}
            </button>
          </div>
        ) : (
          <div>
            <h3 className="head-text">Thank you for getting in touch</h3>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
