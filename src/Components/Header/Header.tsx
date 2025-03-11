import "./Header.css";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import animationData from "../../asset/Animation - 1731768441890.json";
import LanguageSelector from "../LanguageSelector/LanguageSelector";

function Header() {
  const { t } = useTranslation();
  return (
    <header className="header">
      <motion.div 
        className="navbar"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="navbar__logo"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          m-mohammad-d
        </motion.div>
        <LanguageSelector />
      </motion.div>
      <div className="contentWrapper">
        <div className="infoContainer">
          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t("header.greeting")}
          </motion.h1>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {t("header.aboutMe")}
          </motion.p>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {t("header.description")}
          </motion.p>
        </div>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Lottie
            animationData={animationData}
            className="laptop"
            loop={true}
          />
        </motion.div>
      </div>
    </header>
  );
}

export default Header;
