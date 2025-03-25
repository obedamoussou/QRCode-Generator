import React from 'react';
import { FaQrcode } from 'react-icons/fa';
const NavBar = () => {
  return (
    <nav className='justify-between flex flex-wrap px-3 md:px-10 py-3 md:py-5 bg-blue-50 doto'>
        <div className='flex gap-x-1 items-center'>
            <FaQrcode size={25}  color="blue" />
            <h1 className='font-bold text-[#0000FF] text-3xl '  >QR Easy</h1>
        </div>
        <ul className='flex text-[#0000FF] gap-x-5 text-lg font-bold'>
            <li ><a href="">Accueil</a></li>
            <li><a href="/src/pages/Connexion.jsx">CodeQR</a></li>
            <li ><a href="#">Historique</a></li>
        </ul>
    </nav>
  );
};

export default NavBar;
