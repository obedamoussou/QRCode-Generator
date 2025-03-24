import React from 'react';
import { FaQrcode } from 'react-icons/fa';
const NavBar = () => {
  return (
    <nav className='justify-between flex flex-wrap px-3 md:px-10 py-3 md:py-5 bg-blue-50'>
        <div className='flex gap-x-1 items-center'>
            <FaQrcode size={24}  color="blue" />
            <h1 className='font-bold text-[#0000FF] text-2xl '>QR Easy</h1>
        </div>
        <ul className='flex text-[#0000FF] gap-x-5 text-lg font-medium'>
            <li ><a href="/src/pages/Inscription.jsx">Inscription</a></li>
            <li><a href="/src/pages/Connexion.jsx">Connexion</a></li>
            <li className='font-bold'><a href="#">Historique</a></li>
        </ul>
    </nav>
  );
};

export default NavBar;
