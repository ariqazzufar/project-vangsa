const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path'); // Tambahkan ini untuk mengatur folder
const productRoute = require('./src/routes/productRoute.js');

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// 1. Sajikan file statis dari folder 'public' (CSS, Gambar, JS Frontend)
app.use(express.static(path.join(__dirname, 'public')));

// 2. Routes API
app.use('/api', productRoute);

// 3. Tangani rute utama agar menampilkan index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server jalan di port ${PORT}`);
});