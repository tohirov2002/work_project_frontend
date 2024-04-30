import { useTranslation } from 'react-i18next'
import React, { useState } from 'react';

const LanguageDrop = () => {
  const {t, i18n} = useTranslation()

  const handleLanguaChange = (language) => {
    i18n.changeLanguage(language);
  }

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };



  return (
    <div className="dropdown">
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        {selectedOption ? selectedOption : 'Tanlash'}
      </button>
      {isOpen && (
        <ul className="dropdown-menu cursor-pointer">
          <li onClick={() => handleLanguaChange('eng')}>eng</li>
          <li onClick={() => handleLanguaChange('uz')}>uz</li>
          <li onClick={() => handleLanguaChange('ru')}>ru</li>
        </ul>
      )}
    </div>
  );
};

export default LanguageDrop;
