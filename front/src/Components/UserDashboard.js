import React from 'react';
import '../UserDashboard.css'
import '../App.css'
import Navbar from './Navbar';


const user = {
  name: 'Jane Doe',
  storageUsed: 12, // en Go
  storageTotal: 20, // en Go
  files: [
    { name: 'Plan_Architecture_1.pdf', size: '2.4 MB', date: '2024-08-15' },
    { name: 'Rendu_3D_Salon.rvt', size: '8 MB', date: '2024-08-21' },
  ],
};

const UserDashboard = () => {
  return (
    <>
    <Navbar />
    <div className="dashboard-container">
      <h1>Tableau de Bord</h1>
      <h2>Bienvenue, {user.name}!</h2>

      {/* Section d'espace de stockage */}
      <div className="storage-section">
        <h3>Votre Espace de Stockage</h3>
        <p>
          {user.storageUsed} Go utilisés sur {user.storageTotal} Go
        </p>
        <progress value={user.storageUsed} max={user.storageTotal}></progress>
      </div>

      {/* Section de gestion des fichiers */}
      <div className="files-section">
        <h3>Vos Fichiers</h3>
        <table>
          <thead>
            <tr>
              <th>Nom du fichier</th>
              <th>Taille</th>
              <th>Date d'Upload</th>
            </tr>
          </thead>
          <tbody>
            {user.files.map((file, index) => (
              <tr key={index}>
                <td>{file.name}</td>
                <td>{file.size}</td>
                <td>{file.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Boutons pour uploader et acheter plus d'espace */}
      <div className="actions">
        <button className="upload-btn">Uploader un fichier</button>
        <button className="buy-space-btn">Acheter plus d'espace</button>
      </div>
    </div>
    </>
  );
};

export default UserDashboard;
