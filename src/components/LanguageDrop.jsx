import { useTranslation } from 'react-i18next'
import React, { useState } from 'react';
import { Select } from '@chakra-ui/react'
import uz from "../assets/images/uz.jpg"


const LanguageDrop = () => {
  const {t, i18n} = useTranslation()

  const handleLanguaChange = (language) => {
    i18n.changeLanguage(language);
  }




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
      <option className='text-blue-950 font-bold text-[18px]'>uz</option>
      <option value='ru' className='text-blue-950 font-bold text-[18px]'>ru</option>
    </select>
    </div>
  );
};

export default LanguageDrop;
