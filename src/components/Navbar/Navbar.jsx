import "./Navbar.scss";
import { motion } from "framer-motion";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { images } from "../../constants";
import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const items = ["home", "about", "work", "skills", "contact"];

  const handleOnClick = (e) => {
    e.stopPropagation();
    setToggle((prev) => !prev);
    console.log(toggle);
  };

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.page} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {items.map((item) => (
          <li key={`link-${item}`} className="app__flex p-text">
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={handleOnClick} />

        {toggle && (
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 300 }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {items.map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={handleOnClick}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
