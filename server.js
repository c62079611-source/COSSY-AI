const express = require("express");
const cors = require("cors");
require("dotenv").config(); 
const { GoogleGenerativeAI } = require("@google/generative-ai");
const OpenAI = require("openai");
const Anthropic = require("@anthropic-ai/sdk"); 

const app = express();
const gemini = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY
}); 

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
