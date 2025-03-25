import React from 'react';
import { Link } from 'react-router-dom';
import { FaQrcode } from 'react-icons/fa';
const NavBar = () => {
  return (
    <nav className='justify-between flex flex-wrap px-10 py-5 bg-blue-50'>
        <div className='flex gap-x-1 items-center'>
            <FaQrcode size={24}  color="blue" />
            <h1 className='font-bold text-[#0000FF] text-2xl '><Link to="/Principale"> QR Easy </Link></h1>
        </div>
        <ul className='flex text-[#0000FF] gap-x-5 text-lg font-medium'>
            <li><Link to="/Inscription">Inscription</Link></li>
            <li><Link to="/Connexion">Connexion</Link></li>
            <li className='font-bold'><Link to="/Historique">Historique</Link></li>
        </ul>
    </nav>
  );
};

export default NavBar;
