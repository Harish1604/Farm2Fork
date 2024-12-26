const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors'); // Import the CORS middleware

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());
app.use(cors()); // Use CORS middleware to allow all origins

// Load user data from JSON file
let users = [];
fs.readFile('userData.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading user data file:', err);
        return;
    }
    users = JSON.parse(data);
});

// Signup route
app.post('/signup', (req, res) => {
    const { email, username, password } = req.body;

    // Check if username already exists
    const existingUser = users.find(user => user.username === username);
    if (existingUser) {
        return res.status(400).json({ message: 'Username already exists' });
    }

    // Create new user
    const newUser = { email, username, password };
    users.push(newUser);

    // Update user data file
    fs.writeFile('userData.json', JSON.stringify(users), (err) => {
        if (err) {
            console.error('Error writing user data file:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }
        // Respond with success message
        res.status(201).json({ message: 'User signed up successfully' });
    });
});

// Signin route
app.post('/signin', (req, res) => {
    console.log(req.body)
    const { username, password } = req.body;

    // Find user by username
    const user = users.find(user => user.username === username);

    // Check if user exists and password matches
    if (!user || user.password !== password) {
        return res.status(401).json({ message: 'Invalid username or password' });
    }

    // Respond with success message
    res.status(200).json({ message: 'User signed in successfully' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
