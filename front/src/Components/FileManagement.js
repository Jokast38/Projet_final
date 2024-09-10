import React, { useState } from 'react';
import '../App.css'
import '../FileManagement.css';

const FileManagement = () => {
  const [files, setFiles] = useState([
    { name: 'Plan_A.pdf', size: '2.4 MB', date: '2024-08-15' },
    { name: 'Rendu_3D.rvt', size: '8 MB', date: '2024-08-21' },
    { name: 'Devis_Client.docx', size: '1 MB', date: '2024-09-05' },
  ]);

  const handleUpload = () => {
    alert('Fonctionnalité d\'upload à implémenter');
  };

  const handleDelete = (fileName) => {
    setFiles(files.filter(file => file.name !== fileName));
  };

  return (
    <div className="file-management-container">
      <h1>Gestion des Fichiers</h1>
      <div className="file-management-actions">
        <button onClick={handleUpload} className="primary-button">Uploader un fichier</button>
      </div>

      <table className="file-table">
        <thead>
          <tr>
            <th>Nom du fichier</th>
            <th>Taille</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {files.map((file, index) => (
            <tr key={index}>
              <td>{file.name}</td>
              <td>{file.size}</td>
              <td>{file.date}</td>
              <td>
                <button onClick={() => alert('Téléchargement')} className="secondary-button">Télécharger</button>
                <button onClick={() => handleDelete(file.name)} className="delete-button">Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FileManagement;
