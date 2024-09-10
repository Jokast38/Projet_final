import React, { useState } from 'react';
import axios from 'axios';
import '../Signup.css';
import Navbar from './Navbar';
import '../App.css'

const Signup = () => {
  // Gestion de l'état des champs de formulaire
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

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
    if (!formData.first_name.trim()) {
      formErrors.first_name = 'Prénom requis';
    }
    if (!formData.last_name.trim()) {
      formErrors.last_name = 'Nom requis';
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      try {
        // Envoyer les données du formulaire au backend via Axios
        const response = await axios.post('http://localhost:3000/api/auth/register', {
          first_name: formData.first_name,
          last_name: formData.last_name,
          email: formData.email,
          password: formData.password,
        });

        if (response.status === 201) {
          setSuccessMessage('Inscription réussie !');
        }
      } catch (err) {
        setErrors({ apiError: err.response?.data?.message || 'Une erreur est survenue' });
      }
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <>
    <div className="signup-form">
      <h2>Inscription</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Prénom</label>
          <input
            type="text"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
          />
          {errors.first_name && <p>{errors.first_name}</p>}
        </div>

        <div>
          <label>Nom</label>
          <input
            type="text"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
          />
          {errors.last_name && <p>{errors.last_name}</p>}
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
      {errors.apiError && <p>{errors.apiError}</p>}
      {successMessage && <p>{successMessage}</p>}
    </div>
    </>
  );
};

export default Signup;
