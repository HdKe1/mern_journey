const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// In-memory array to store users
let users = [];

// GET /users - Retrieve all users
app.get('/users', (req, res) => {
    res.json(users);
});

// POST /users - Add a new user
app.post('/users', (req, res) => {
    const { id, name, email } = req.body;

    // Check if the user with the same ID already exists
    if (users.find(user => user.id === id)) {
        return res.status(400).json({ message: "User with this ID already exists" });
    }

    const newUser = { id, name, email };
    users.push(newUser);
    res.status(201).json(newUser);
});

// PUT /users/:id - Update an existing user
app.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;

    const user = users.find(user => user.id == id);
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    user.name = name || user.name;
    user.email = email || user.email;

    res.json(user);
});

// DELETE /users/:id - Remove a user
app.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    const index = users.findIndex(user => user.id == id);

    if (index === -1) {
        return res.status(404).json({ message: "User not found" });
    }

    const deletedUser = users.splice(index, 1);
    res.json(deletedUser[0]);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
