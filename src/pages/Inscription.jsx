import React from 'react';
import { FaQrcode } from 'react-icons/fa';

const Inscription = () => {
  return (
    <section className="flex items-center justify-center min-h-screen">
      <div className="border-[#0000FF] border-2 flex w-full xl:w-1/2 rounded-lg">
        <div className="w-0 xl:w-1/2 bg-blue-50 hidden xl:flex items-center justify-center gap-x-1">
          <FaQrcode size={37} color="blue" />
          <h1 className="font-bold text-[#0000FF] text-5xl">QR Easy</h1>
        </div>
        <form className="flex flex-col items-center w-full xl:w-1/2 py-3 xl:py-6 " action="">
          <h1 className="text-[#0000FF] text-xl lg:text-3xl font-bold pb-4">Inscrivez-vous</h1>
          <input className="border-[#0000FF] border p-2 rounded-md w-64 md:w-80 mb-2" type="text" name="nom" placeholder="Nom" />
          <input className="border-[#0000FF] border p-2 rounded-md w-64 md:w-80 mb-2" type="text" name="prenoms" placeholder="Prénoms" />
          <input className="border-[#0000FF] border p-2 rounded-md w-64 md:w-80 mb-2" type="email" name="email" placeholder="Email" />
          <input className="border-[#0000FF] border p-2 rounded-md w-64 md:w-80 mb-2" type="password" name="password" placeholder="Mot de passe" />
          <input className="border-[#0000FF] border p-2 rounded-md w-64 md:w-80 mb-2" type="password" name="pass_valid" placeholder="Confirmez le mot de passe" />
          <button className="bg-[#0000FF] text-white font-bold px-4 py-2 rounded-lg mt-4" type="submit">
            Envoyer
          </button>
        </form>
      </div>
    </section>
  );
};

export default Inscription;
