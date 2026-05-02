const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const productRoute = require('./src/routes/productRoute.js');
dotenv.config();
const app = express();

// ... sisa kodenya sama ...

// Middleware
app.use(cors());
app.use(express.json()); // Biar bisa baca data JSON yang dikirim

// Routes
app.use('/api', productRoute); // Jalur aksesnya nanti jadi localhost:5000/api/products

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server jalan di port ${PORT}`);
});

