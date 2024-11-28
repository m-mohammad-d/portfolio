import  { useState } from "react";
import { useTranslation } from "react-i18next";
import "./LanguageSelector.css";

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
    setSelectedLanguage(language);
    setIsDropdownOpen(false);
  };

  const languageOptions =
    selectedLanguage === "en"
      ? [{ code: "fa", label: "فارسی", flag: "/iranFlag.png" }]
      : [{ code: "en", label: "EN", flag: "/usaFlag.png" }];

  return (
    <div className="language-selector">
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={isDropdownOpen ? "true" : "false"}
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="language-selector__button"
      >
        <div className="flex items-center gap-4">
          <img
            src={selectedLanguage === "en" ? "/usaFlag.png" : "/iranFlag.png"}
            alt={selectedLanguage}
            className="flag-icon"
          />
          <span>{selectedLanguage === "en" ? "EN" : "فارسی"}</span>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          fill="none"
          viewBox="0 0 24 25"
          className="dropdown-icon"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m6 9.5 6 6 6-6"
          ></path>
        </svg>
      </button>

      {isDropdownOpen && (
        <div className="dropdown-menu">
          {languageOptions.map((language) => (
            <div
              key={language.code}
              onClick={() => handleLanguageChange(language.code)}
              className="dropdown-item"
            >
              <img
                src={language.flag}
                alt={language.label}
                className="flag-icon"
              />
              {language.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
