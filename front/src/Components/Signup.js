import React, { useState } from 'react';
import '../Signup.css';
import Navbar from './Navbar';
import '../App.css'

const Signup = () => {
  // Gestion de l'état des champs de formulaire
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  // Fonction pour gérer les changements dans les champs de formulaire
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Fonction pour valider les champs avant soumission
  const validate = () => {
    let formErrors = {};
    if (!formData.username.trim()) {
      formErrors.username = 'Nom d’utilisateur requis';
    }
    if (!formData.email) {
      formErrors.email = 'Email requis';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'Email invalide';
    }
    if (!formData.password) {
      formErrors.password = 'Mot de passe requis';
    } else if (formData.password.length < 6) {
      formErrors.password = 'Le mot de passe doit contenir au moins 6 caractères';
    }
    if (formData.password !== formData.confirmPassword) {
      formErrors.confirmPassword = 'Les mots de passe ne correspondent pas';
    }
    return formErrors;
  };

  // Fonction pour soumettre le formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      // Si pas d'erreurs, on peut envoyer les données au backend
      console.log('Données soumises : ', formData);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <>
    <Navbar />
    <div className="signup-form">
      <h2>Inscription</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nom d'utilisateur</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>

        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>

        <div>
          <label>Mot de passe</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>

        <div>
          <label>Confirmer le mot de passe</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
        </div>

        <button type="submit">S'inscrire</button>
      </form>
    </div>
    </>
  );
};

export default Signup;
