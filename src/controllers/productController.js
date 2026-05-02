const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Ambil semua produk
const getProducts = async (req, res) => {
  try {
    const products = await prisma.product.findMany();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Tambah produk baru
const createProduct = async (req, res) => {
  const { name, price, desc, image } = req.body;
  try {
    const product = await prisma.product.create({
      data: { name, price, desc, image },
    });
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

module.exports = { getProducts, createProduct };