// src/services/mailService.js
const nodemailer = require("nodemailer");
require('dotenv').config(); // Charger les variables d'environnement depuis .env

// Configuration du transporteur SMTP avec Brevo
let transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  secure: false, // Utilise "true" pour le port 465 si tu utilises SSL
  auth: {
    user: process.env.BREVO_SMTP_USER, // L'utilisateur SMTP de Brevo
    pass: process.env.BREVO_SMTP_PASSWORD, // Le mot de passe SMTP de Brevo
  },
});

// Fonction d'envoi d'email
const sendEmail = async (toEmail, subject, text) => {
  try {
    let info = await transporter.sendMail({
      from: '"MEMORA" <jokast38@gmail.com>', // L'adresse de l'expéditeur
      to: toEmail, // Destinataire
      subject: subject, // Objet de l'email
      text: text, // Contenu du texte
    });

    console.log("Message envoyé: %s", info.messageId);
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email:", error);
  }
};

module.exports = {
  sendEmail,
};
