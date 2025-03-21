import React from 'react';


const Connexion = () => {
  return (
    <section className='items-center pt-10'>
       <h1 className=' text-[#0000FF] text-xl font-bold pb-4'>Connexion</h1>
       <form className='rounded border-2 p-4 bg-blue-50 gap-y-2' action="">
            
            <input type="email" name='email' placeholder='Email'/>
            <input type="password" name='password' placeholder='Mot de passe'/>
            <button class="items-center bg-[#0000FF] hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                Se connecter
            </button>
       </form>

    </section>

  );
};

export default Connexion;
