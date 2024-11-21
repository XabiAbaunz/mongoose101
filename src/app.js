// .env konfigurazioa lehenengo
require('dotenv').config();

const path = require('path');
const express = require('express');
const connectDB = require('./config/database');
const ikasleRoutes = require('./routes/ikasle.routes');
const errorHandler = require('./middleware/error.middleware');
const taldeRoutes = require('./routes/talde.routes');

const app = express();

// MongoDB konexioa
connectDB();

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware-ak
app.use(express.json());

// Static files
app.use(express.static('public'));

// Routes
app.use('/api/ikasleak', ikasleRoutes);
app.use('/api/taldeak', taldeRoutes);

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/test', (req, res) => {
    res.render('test');
});

// Error handling
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Zerbitzaria martxan ${PORT} portuan`);
});