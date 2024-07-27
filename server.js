const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

let laps = [];

// Endpoint to get all laps
app.get('/laps', (req, res) => {
    res.json(laps);
});

// Endpoint to add a new lap
app.post('/laps', (req, res) => {
    const lapTime = req.body.lapTime;
    if (lapTime) {
        laps.push(lapTime);
        res.status(201).json({ message: 'Lap added', lapTime });
    } else {
        res.status(400).json({ message: 'Invalid lap time' });
    }
});

// Endpoint to clear all laps
app.delete('/laps', (req, res) => {
    laps = [];
    res.status(200).json({ message: 'All laps cleared' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
