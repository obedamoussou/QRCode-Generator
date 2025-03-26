import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Connexion = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Connexion réussie !");
        
        // Stocker le token dans le localStorage
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));

        // Rediriger vers la page d'accueil
        navigate("/");
      } else {
        alert("Erreur : " + (data.message || "Email ou mot de passe incorrect"));
      }
    } catch (error) {
      console.error("Erreur lors de la connexion :", error);
      alert("Impossible de se connecter au serveur. Vérifiez votre connexion et assurez-vous que le backend est en cours d'exécution.");
    }
  };

  return (
    <section className="items-center pt-10">
      <h1 className="text-[#0000FF] text-xl font-bold pb-4">Connexion</h1>
      <form className="rounded border-2 p-4 bg-blue-50 gap-y-2" onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Mot de passe" value={formData.password} onChange={handleChange} required />
        <button className="items-center bg-[#0000FF] hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
          Se connecter
        </button>
      </form>
    </section>
  );
};

export default Connexion;
