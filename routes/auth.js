const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const db = require('../config/db');

router.get('/signup.ejs', (req, res) => {
    res.render('signup');
});

router.post('/submit_signup', async (req, res) => {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    res.redirect('/login.ejs');
    // try {
    //     await db.execute('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [username, email, hashedPassword]);
    //     res.redirect('/login.ejs');
    // } catch (err) {
    //     console.error(err);
    //     res.send('Error occurred during signup');
    // }
});

router.get('/login.ejs', (req, res) => {
    res.render('login');
});

router.post('/submit_login', async (req, res) => {
    const { username, password } = req.body;
    res.redirect('/home.ejs');
    // try {
    //     const [rows] = await db.execute('SELECT * FROM users WHERE username = ?', [username]);

    //     if (rows.length > 0) {
    //         const user = rows[0];
    //         const match = await bcrypt.compare(password, user.password);
    //         if (match) {
    //             // Set session expiry behavior
    //             req.session.userId = user.id;
    //             res.send('Login successful!');
    //         } else {
    //             res.send('Invalid credentials');
    //         }
    //     } else {
    //         res.send('Invalid credentials');
    //     }
    // } catch (err) {
    //     console.error(err);
    //     res.send('Error occurred during login');
    // }
});

router.get('/home.ejs', (req, res) => {
    res.render('home');
});

module.exports = router;