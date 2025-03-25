
import React from 'react';
import AnimationIcones from '../composants/AnimationIcones';


const Accueil = () => {
    return (
        <section>
            <div className='flex flex-wrap justify-center gap-y-4 gap-x-2 md:gap-6 xl:gap-x-32 py-8 lg:py-10'>
                <div className='pt-0 lg:pt-4'>
                    <h1 className='doto text-[#0000FF]  text-2xl xl:text-4xl w-64'>Générez facilement vos codes QR avec QREasy</h1>
                    <p className='text-md lg:text-lg w-72 py-5'>Créez, customisez et téléchargez au même endroit vos codes QR en quelques clics.</p>
                    <button className="bg-[#0000FF] text-white font-bold px-4 py-2 rounded-lg doto text-lg"><a href="/src/pages/CodeQR.jsx">Commencer</a></button>
                </div>
                <div className='pt-0 lg:pt-8'>
                    <AnimationIcones />
                </div>
            </div>
        </section>
    );
};

export default Accueil;
