import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Inscription = () => {
  const [formData, setFormData] = useState({
    nom: "",
    prenoms: "",
    email: "",
    password: "",
    pass_valid: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.pass_valid) {
      toast.error("Les mots de passe ne correspondent pas !", { autoClose: 5000 });
      return;
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nom: formData.nom,
          prenoms: formData.prenoms,
          email: formData.email,
          password: formData.password,
          password_confirmation: formData.pass_valid,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Inscription réussie !", { autoClose: 5000 });
        setFormData({
          nom: "",
          prenoms: "",
          email: "",
          password: "",
          pass_valid: "",
        });

        setTimeout(() => navigate("/connexion"), 2000);
      } else {
        if (response.status === 422 && data.errors && data.errors.email) {
          toast.error("L'email existe déjà.", { autoClose: 5000 });
        } else {
          toast.error(data.message || "Une erreur inconnue est survenue", { autoClose: 5000 });
        }
      }
    } catch (error) {
      console.error("Erreur lors de l'inscription :", error);
      toast.error("Impossible de se connecter au serveur.", { autoClose: 5000 });
    }
  };

  return (
    <section className="items-center pt-10">
      <h1 className="text-[#0000FF] text-xl font-bold pb-4">Inscription</h1>
      <form className="rounded border-2 p-4 bg-blue-50 gap-y-2" onSubmit={handleSubmit}>
        <input type="text" name="nom" placeholder="Nom" value={formData.nom} onChange={handleChange} required />
        <input type="text" name="prenoms" placeholder="Prénoms" value={formData.prenoms} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Mot de passe" value={formData.password} onChange={handleChange} required />
        <input type="password" name="pass_valid" placeholder="Confirmez le mot de passe" value={formData.pass_valid} onChange={handleChange} required />
        <button className="items-center bg-[#0000FF] hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
          Envoyer
        </button>
      </form>
    </section>
  );
};

export default Inscription;
