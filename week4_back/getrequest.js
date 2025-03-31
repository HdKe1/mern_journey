const express = require('express');
const app = express();
const port = 3000;

app.get('/welcome', (req, res) => {
    res.json({ message: "Welcome to Express!" });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
