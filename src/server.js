const express = require("express");
const axios = require("axios");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;
const API_KEY = process.env.NEWS_API_KEY;

app.use(express.static("public"));

// Ruta para obtener las noticias mas recientes de Chile
app.get("/api/news", async (req, res) => {
  try {
    const response = await axios.get(
      `https://newsdata.io/api/1/latest?country=cl&apikey=${API_KEY}`
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching news:", error);
    res.status(500).send("Error fetching news");
  }
});

// Listen
app.listen(PORT, () => {
  console.log("Server running in port", PORT);
});
