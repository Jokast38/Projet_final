import React, { useState } from 'react';
import '../Login.css';
import Navbar from './Navbar';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [loginMessage, setLoginMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let formErrors = {};
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
    return formErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await fetch('http://localhost:3000/api/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        const data = await response.json();
        if (response.ok) {
          setLoginMessage('Connexion réussie!');
          console.log('Données reçues du backend : ', data);
          // Stockez le token dans localStorage ou redirigez l'utilisateur
        } else {
          setErrors({ apiError: data.message || 'Erreur de connexion' });
        }
      } catch (error) {
        setErrors({ apiError: 'Erreur lors de la connexion au serveur' });
      }
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <>
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Connexion</h2>

          {loginMessage && <p>{loginMessage}</p>}

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

          {errors.apiError && <p>{errors.apiError}</p>}

          <button type="submit">Se connecter</button>
        </form>
      </div>
    </>
  );
};

export default Login;
