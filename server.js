// Global Modules Import
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const multer = require('multer');

// Import app.js
const app = require('./app');

// Initializing Environment
dotenv.config({ path: './config.env' });

const authController = require('./controllers/authController');

// Creating DB link
const DB = process.env.DATABASE.replace(
  '<password>',
  process.env.DATABASE_PASSWORD
);

// Connecting to DB
mongoose
  .connect(DB)
  .then(() => console.log('Database connected successfully!'))
  .catch((err) => console.log(`Error connected to the database ${err}`));

// Upload file handling
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads');
  },
  filename: (req, file, cb) => {
    cb(null, `${file.originalname}`);
  },
});
const upload = multer({ storage: storage });

// Upload file route
app.post(
  '/api/v1/upload',
  authController.protect,
  upload.single('file'),
  (req, res) => {
    res.status(200).json({
      status: 'success',
      message: 'File uploaded successfully',
      filepath: `uploads/${req.file.filename}`,
    });
  }
);

// Server start
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
