import React from 'react';
import SideBar from "../composants/SideBar.jsx";

const Principale = () => {
  return (
    
    <section className='text-center'>
        <h1 className='pt-10 font-medium text-3xl'>Obtenez votre code QR en quelques clics sur <em className='text-[#0000FF] font-bold'>QR Easy</em> </h1>
        <div className='justify-center flex flex-wrap gap-x-10 pt-10 md:pt-14'>
            <SideBar/>
            

        </div>
        

    </section>

  );
};

export default Principale;
