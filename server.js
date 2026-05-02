const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path'); 
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

// 3. JARING PENANGKAP UTAMA (Solusi Paling Aman untuk SPA / Frontend)
// Otomatis ngirim index.html kalau rute di atas nggak ada yang cocok
app.use((req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// 4. Pengaturan Listen (Agar tidak bentrok saat di-deploy ke Vercel)
if (process.env.NODE_ENV !== 'production') {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
        console.log(`Server jalan di port ${PORT}`);
    });
}

// 5. Ekspor aplikasi (SANGAT WAJIB untuk Vercel Serverless Functions)
module.exports = app;