import express from 'express';
import cors from 'cors';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3001;
const GALLERY_ORDER_FILE = path.join(__dirname, 'gallery-order.json');

app.use(cors());
app.use(express.json());

// Get gallery order
app.get('/api/gallery-order', async (req, res) => {
  try {
    const data = await fs.readFile(GALLERY_ORDER_FILE, 'utf-8');
    res.json(JSON.parse(data));
  } catch (error) {
    // If file doesn't exist, return null (use default order)
    if (error.code === 'ENOENT') {
      res.json({ order: null });
    } else {
      res.status(500).json({ error: 'Failed to read gallery order' });
    }
  }
});

// Save gallery order
app.post('/api/gallery-order', async (req, res) => {
  try {
    const { order } = req.body;

    if (!Array.isArray(order)) {
      return res.status(400).json({ error: 'Order must be an array' });
    }

    await fs.writeFile(
      GALLERY_ORDER_FILE,
      JSON.stringify({ order, updatedAt: new Date().toISOString() }, null, 2)
    );

    res.json({ success: true, message: 'Gallery order saved successfully' });
  } catch (error) {
    console.error('Error saving gallery order:', error);
    res.status(500).json({ error: 'Failed to save gallery order' });
  }
});

app.listen(PORT, () => {
  console.log(`Gallery backend server running on http://localhost:${PORT}`);
});
