import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="footer mobile-padding">
      <h1 className="footer-heading">Get In Touch</h1>
      <div className="socials">
        <a href="https://www.facebook.com/haider.mansoor.750/" target="_blank">
          <motion.div whileHover={{ scale: 1.2 }}>
            <img
              className="social-icon"
              src="https://img.icons8.com/ios-filled/256/facebook-new.png"
              alt="facebook"
            />
          </motion.div>
        </a>
        <a href="https://www.instagram.com/fifaholic247/" target="_blank">
          <motion.div whileHover={{ scale: 1.2 }}>
            <img
              className="social-icon"
              src="https://img.icons8.com/ios-filled/256/instagram-new.png"
              alt="instagram"
            />
          </motion.div>
        </a>
        <a href="https://twitter.com/HaiderMansoor8" target="_blank">
          <motion.div whileHover={{ scale: 1.2 }}>
            <img
              className="social-icon"
              src="https://img.icons8.com/ios-filled/256/twitter.png"
              alt="twitter"
            />
          </motion.div>
        </a>
        <a href="https://github.com/Hydra016" target="_blank">
          <motion.div whileHover={{ scale: 1.2 }}>
            <img
              className="social-icon"
              src="https://img.icons8.com/ios-filled/256/github.png"
              alt="github"
            />
          </motion.div>
        </a>
        <a
          href="https://www.linkedin.com/in/haider-mansoor-4966a220b/"
          target="_blank"
        >
          <motion.div whileHover={{ scale: 1.2 }}>
            <img
              className="social-icon"
              src="https://img.icons8.com/ios-filled/256/linkedin-circled.png"
              alt="linkedin"
            />
          </motion.div>
        </a>
      </div>
    </div>
  );
};

export default Footer;
