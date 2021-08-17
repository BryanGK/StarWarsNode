const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.get('/api', (req, res) => {
    res.json({ message: "Hello from Server" });
});

app.listen(PORT, () => {
    console.log(`SERVER LISTENING ON PORT: ${PORT}`);
})