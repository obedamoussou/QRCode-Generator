import React from 'react';
import { FaLink } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaFont } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import { FaImage } from 'react-icons/fa';
const SideBar = () => {
  return (
    <div className='bg-blue-50 rounded-3xl px-6 md:px-4 py-5 md:py-10 flex md:inline'>
        <button className='pb-0 md:pb-10'> <FaLink size={20} color="blue" /> </button>
        <button className='pb-0 px-8 md:px-0 md:pb-10'> <FaEnvelope size={20} color="blue" /> </button>  
        <button  className='pb-0  md:pb-10'><FaFont size={20} color="blue" /> </button> 
        <button className='pb-0 px-8 md:px-0 md:pb-10'> <FaPhone size={20} color="blue" /> </button>
        <button> <FaImage size={20} color="blue" /> </button>
    </div>
  );
};

export default SideBar;
