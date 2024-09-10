const express = require('express');
const Sequelize = require('sequelize');
const dotenv = require('dotenv');
const cors = require('cors');


const User = require('./models/User');
const File = require('./models/File');

const fileRoutes = require('./routes/file');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const adminRoutes = require('./routes/admin');


dotenv.config();

const app = express();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql'
});

sequelize.authenticate()
    .then(() => console.log('MySQL connected'))
    .catch(err => console.log('Error: ' + err));

app.listen(3000, () => {
    console.log('Server running on port 3000');
});


sequelize.sync({ force: false }) // force: true pour recréer les tables si elles existent déjà
    .then(() => console.log('Tables have been created'))
    .catch(err => console.log(err));

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3001', // Remplacez par le domaine de votre frontend
    methods: 'GET,POST,PUT,DELETE',  // Méthodes HTTP autorisées
    credentials: true
  }));
app.use('/api/auth', authRoutes);
app.use('/api/files', fileRoutes);
app.use('/api/user', userRoutes);
app.use('/api/admin', adminRoutes);
