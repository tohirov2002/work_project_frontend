import {useState} from 'react'
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Logo from '../../assets/images/logo.png'
// import search from '../assets/images/search.svg'
import LanguageDrop from '../LanguageDrop';


function Header() {
  const [darkMode, setDarkMode] = useState(true);
  const {t} = useTranslation()
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <header className='container mt-7'>
        <div className='flex items-center justify-between'>
        <ul className='flex items-center justify-betwen'>
            <li className='flex items-center'>
                <NavLink to={'/'}><img className='w-[70px] h-[70px]' src={Logo} alt="logo" /></NavLink>
                <NavLink to={'/'} className='text-[20px] text-center w-[20px] ml-3 text-blue-950 font-bold font-mono'>Sog'lom Hayot</NavLink>   
            </li>
            <li className='ml-[150px]'>
              <NavLink to={'/about'} className='text-[20px] hover:text-blue-500 text-blue-800 hover:cursor-pointer font-bold shadow-xl'>{ t("soz1") }</NavLink>
              <NavLink to={'/services'} className='text-[20px] hover:text-blue-500 text-blue-800 hover:cursor-pointer ml-8 font-bold shadow-xl'>{ t("soz2") }</NavLink>
              <NavLink to={'/doctors'} className='text-[20px] hover:text-blue-500 text-blue-800 hover:cursor-pointer ml-8 font-bold shadow-xl'>{ t("soz3") }</NavLink>
              <NavLink to={'/Insurance'} className='text-[20px] hover:text-blue-500 text-blue-800 hover:cursor-pointer ml-8 font-bold shadow-xl'>{ t("soz4") }</NavLink>
              <NavLink to={'/Articles'} className='text-[20px] hover:text-blue-500 text-blue-800 hover:cursor-pointer ml-8 font-bold shadow-xl'>{ t("soz5") }</NavLink>
              <NavLink to={'/connections'} className='text-[20px] hover:text-blue-500 text-blue-800 hover:cursor-pointer ml-8 font-bold shadow-xl'>{ t("soz6") }</NavLink>
            </li>
        </ul>
        <ul>
        <li className='flex items-center gap-4'>
                <button onClick={toggleDarkMode}>
                    {darkMode ? (
                      <svg class="text-yellow-500 dark:text-white w-[30px] h-[30px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M13 3a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0V3ZM6.343 4.929A1 1 0 0 0 4.93 6.343l1.414 1.414a1 1 0 0 0 1.414-1.414L6.343 4.929Zm12.728 1.414a1 1 0 0 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 1.414 1.414l1.414-1.414ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-9 4a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H3Zm16 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2ZM7.757 17.657a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414Zm9.9-1.414a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM13 19a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0v-2Z" clip-rule="evenodd"/>
                      </svg>
                    ) : (
                      <svg class="w-[23px] h-[23px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M11.675 2.015a.998.998 0 0 0-.403.011C6.09 2.4 2 6.722 2 12c0 5.523 4.477 10 10 10 4.356 0 8.058-2.784 9.43-6.667a1 1 0 0 0-1.02-1.33c-.08.006-.105.005-.127.005h-.001l-.028-.002A5.227 5.227 0 0 0 20 14a8 8 0 0 1-8-8c0-.952.121-1.752.404-2.558a.996.996 0 0 0 .096-.428V3a1 1 0 0 0-.825-.985Z" clip-rule="evenodd"/>
                      </svg>
                    )}
                </button>
                <LanguageDrop/>
            </li>
        </ul>
        </div>
    </header>
  )
}

export default Header