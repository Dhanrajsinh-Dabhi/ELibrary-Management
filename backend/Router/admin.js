const express = require('express');
const multer = require('multer');
const router = express.Router();
const path = require('path');

const add = require('../Controller/Admin/Add');
const Book = require('../Model/Book');

// const upload = multer({
//   dest: path.join(__dirname, './Books/Photos'), // Use absolute path
//   limits: {
//     fileSize: 20000000 // 20MB
//   },
//   fileFilter(_req, file, cb) {
//     if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg') {
//       cb(null, true);
//     } else {
//       cb(null, false);
//       return cb(new Error('Please upload an image'));
//     }
//   },
//     filename(req, file, cb) {
//       const userId = req.params.id;
//       const filename = `${userId}`;
//       cb(null, filename);
//   }
// });

// const bookPhotoUpload = upload.single([
//   { name: 'bookphoto', maxCount: 1}
// ]);


// router.post('/addbook', bookPhotoUpload, add);

const upload = multer({
  dest: path.join(__dirname, './Books/Photos'), // Use absolute path
  limits: {
    fileSize: 2000000 // 2MB
  },
  fileFilter(req, file, cb) {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg') {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error('Please upload an image'));
    }
  },
  filename(req, file, cb) {
    const filename = `${req.params.uID}-${Date.now()}-${file.originalname}`;
    cb(null, filename);
  }
});

const bookPhotoUpload = upload.single('bookPhoto');

router.post('/addbook/:uID', bookPhotoUpload, add);

module.exports = router;