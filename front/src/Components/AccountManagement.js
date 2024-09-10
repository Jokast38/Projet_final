import React, { useState } from 'react';
import '../AccountManagement.css';

const AccountManagement = () => {
  // Exemple d'état pour les informations de l'utilisateur (à remplacer par des données dynamiques)
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    plan: 'Standard (20 Go)',
    invoices: [
      { id: 1, date: '2024-09-01', amount: '20€' },
      { id: 2, date: '2024-06-01', amount: '20€' },
    ],
  });

  // Gestion de la mise à jour des informations utilisateur
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSave = () => {
    alert('Informations mises à jour.');
    // Logique pour envoyer les nouvelles informations au backend
  };

  return (
    <div className="account-management-container">
      <h1>Gestion du compte</h1>

      {/* Informations personnelles */}
      <section className="user-info-section">
        <h2>Informations personnelles</h2>
        <label>
          Nom :
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Email :
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </label>
        <button className="primary-button" onClick={handleSave}>
          Enregistrer les modifications
        </button>
      </section>

      {/* Détails de l'abonnement */}
      <section className="subscription-section">
        <h2>Abonnement</h2>
        <p>Plan actuel : {user.plan}</p>
        <button className="primary-button">Acheter plus d'espace</button>
      </section>

      {/* Factures */}
      <section className="invoices-section">
        <h2>Factures</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Date</th>
              <th>Montant</th>
            </tr>
          </thead>
          <tbody>
            {user.invoices.map((invoice) => (
              <tr key={invoice.id}>
                <td>{invoice.id}</td>
                <td>{invoice.date}</td>
                <td>{invoice.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default AccountManagement;
