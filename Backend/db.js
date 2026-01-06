const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

router.post('/Alldata', async (req, res) => {
    try {
        // Fetch directly from the collection instead of relying on global
        const data = await mongoose.connection.db
            .collection("foodapp")
            .find({})
            .toArray();
            
        res.send(data);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
});

module.exports = router;