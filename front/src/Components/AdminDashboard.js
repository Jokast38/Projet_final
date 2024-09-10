import React, { useState, useEffect } from 'react';

const AdminDashboard = () => {
  // Exemple de données administratives (à remplacer par des données réelles du backend)
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', role: 'user', status: 'active' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', role: 'admin', status: 'active' },
    // Ajouter plus d'utilisateurs dynamiques ici
  ]);

  const [files, setFiles] = useState([
    { id: 1, name: 'Plan_Architecture_1.pdf', size: '2 MB', uploadedBy: 'John Doe', date: '2024-09-01' },
    { id: 2, name: 'Devis_Client.pdf', size: '1.5 MB', uploadedBy: 'Jane Smith', date: '2024-09-03' },
  ]);

  const [stats, setStats] = useState({
    totalUsers: 150,
    totalFiles: 300,
    storageUsed: '200 Go',
  });

  useEffect(() => {
    // Logique pour récupérer les utilisateurs, fichiers et statistiques via une API
  }, []);

  return (
    <div className="admin-dashboard-container">
      <h1>Tableau de bord Administrateur</h1>

      {/* Section des statistiques */}
      <section className="stats-section">
        <h2>Statistiques Générales</h2>
        <p>Total des utilisateurs : {stats.totalUsers}</p>
        <p>Total des fichiers : {stats.totalFiles}</p>
        <p>Espace de stockage utilisé : {stats.storageUsed}</p>
      </section>

      {/* Gestion des utilisateurs */}
      <section className="users-section">
        <h2>Gestion des utilisateurs</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nom</th>
              <th>Email</th>
              <th>Rôle</th>
              <th>Statut</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>{user.status}</td>
                <td>
                  <button className="primary-button">Modifier</button>
                  <button className="delete-button">Supprimer</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Gestion des fichiers */}
      <section className="files-section">
        <h2>Gestion des fichiers</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nom du fichier</th>
              <th>Taille</th>
              <th>Utilisateur</th>
              <th>Date d'upload</th>
            </tr>
          </thead>
          <tbody>
            {files.map((file) => (
              <tr key={file.id}>
                <td>{file.id}</td>
                <td>{file.name}</td>
                <td>{file.size}</td>
                <td>{file.uploadedBy}</td>
                <td>{file.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default AdminDashboard;
