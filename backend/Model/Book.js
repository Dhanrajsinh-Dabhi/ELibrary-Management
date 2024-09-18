const mongoose = require('mongoose');
const express = require('express');

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/book').then(() => {
    console.log("connected");
  }).catch((err) => {
    console.error("not connected");
  });

// Create a schema for the book data
const bookSchema = new mongoose.Schema({
  Category: String,
  Bookname: String,
  Bookid: String,
  Author: String,
  BookPhoto: {
    url: String,
    public_id: String
}
  // BookPdf: Buffer
});

// Create a model for the book data
const Book = mongoose.model('Book', bookSchema);
module.exports=Book;