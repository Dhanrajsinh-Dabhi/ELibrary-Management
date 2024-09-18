const express =require('express');
const router=express.Router();
const { Home, allUser, ProfileUpdate, AllBooks } = require('../Controller/protectedRoute');
const { Register,Login, auth_me,contact } = require('../Controller/authController');



router.get('/',Home);
router.post('/register',Register);
router.post('/login',Login);
router.get('/alluser',allUser);
router.get('/auth',auth_me);
router.post('/contact',contact);
router.patch('/profile/update/:uID',ProfileUpdate);
router.get('/get-all-books',AllBooks);

module.exports=router;
