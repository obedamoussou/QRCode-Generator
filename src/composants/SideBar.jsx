import React from 'react';
import { FaLink } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaFont } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import { FaImage } from 'react-icons/fa';
const SideBar = () => {
  return (
    <div className='bg-blue-50 rounded-2xl px-4 flex md:inline py-10'>
      <ul>
        <li className='pb-10'><a href="#" ><FaLink size={20} color="blue" /></a></li>
        <li className='pb-10'><a href="#"><FaEnvelope size={20} color="blue" /></a></li>
        <li className='pb-10'><a href="#"><FaFont size={20} color="blue" /></a> </li>
        <li className='pb-10'><a href="#"><FaPhone size={20} color="blue" /></a></li>
        <li><a href="#"><FaImage size={20} color="blue" /></a></li>
      </ul>

    </div>
  );
};

export default SideBar;
