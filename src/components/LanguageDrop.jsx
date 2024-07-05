import { useTranslation } from 'react-i18next';
import React from 'react';
import uz from "../assets/images/uz.png";
import ru from "../assets/images/ru.png"; 

const LanguageDrop = () => {
  const { t, i18n } = useTranslation();

  const handleLanguaChange = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="dropdown">
      <select
        onChange={(e) => handleLanguaChange(e.target.value)}
        style={{
          appearance: "none",
          backgroundColor: "transparent",
          border: "none",
          padding: "0",
          margin: "0",
          outline: "none",
          fontSize: "inherit",
          fontFamily: "inherit",
          cursor: "pointer",
        }}
      >
        <option value="uz">
          <img src={uz} alt="Uzbekistan Flag" className="flag-icon" /> UZ
        </option>
        <option value="ru">
          <img src={ru} alt="Russia Flag" className="flag-icon" /> RU
        </option>
      </select>
    </div>
  );
};

export default LanguageDrop;
