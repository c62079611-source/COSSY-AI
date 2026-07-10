const express = require("express");
const cors = require("cors");

const app = express();

const PORT = 3000;


// Middleware

app.use(cors());

app.use(express.json());


// Test route

app.get("/", (req, res) => {

    res.send("COSSY AI Core Server Online 🚀");

});


// AI message route

app.post("/chat", (req, res) => {

    const userMessage = req.body.message;


    res.json({

        reply: "COSSY AI received: " + userMessage

    });

});


// Start server

app.listen(PORT, () => {

    console.log(
        `COSSY AI Server running on port ${PORT}`
    );

}); 
