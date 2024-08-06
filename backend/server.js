const express = require("express");

const app = express();

const dotenv = require("dotenv");
dotenv.config();

const port = process.env.PORT || 5000;

const apikey = process.env.API_KEY;

const cors = require('cors');
app.use(cors());

app.get("/api/war", async (req, res) => {
  try {
    const response = await fetch(`https://omdbapi.com/?s=war&apikey=${apikey}`);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.json({ error: "Failed to fetch data" });
  }
});

app.get("/api/all", async (req, res) => {
  try {
    const response = await fetch(`https://omdbapi.com/?s=all&apikey=${apikey}`);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.json({ error: "Failed to fetch data" });
  }
});

app.get("/api/are", async (req, res) => {
  try {
    const response = await fetch(`https://omdbapi.com/?s=are&apikey=${apikey}`);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.json({ error: "Failed to fetch data" });
  }
});

app.get("/api/fight", async (req, res) => {
  try {
    const response = await fetch(`https://omdbapi.com/?s=fight&apikey=${apikey}`);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.json({ error: "Failed to fetch data" });
  }
});

app.get("/api/comedy", async (req, res) => {
  try {
    const response = await fetch(
      `https://omdbapi.com/?s=comedy&apikey=${apikey}`
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.json({ error: "Failed to fetch data" });
  }
});

app.get("/api/night", async (req, res) => {
  try {
    const response = await fetch(
      `https://omdbapi.com/?s=night&apikey=${apikey}`
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.json({ error: "Failed to fetch data" });
  }
});
app.get("/api/love", async (req, res) => {
  try {
    const response = await fetch(
      `https://omdbapi.com/?s=love&apikey=${apikey}`
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.json({ error: "Failed to fetch data" });
  }
});
app.get("/api/avenger", async (req, res) => {
  try {
    const response = await fetch(
      `https://omdbapi.com/?s=avenger&apikey=${apikey}`
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.json({ error: "Failed to fetch data" });
  }
});

app.get("/api/search/:string", async (req, res) => {
  const { string } = req.params;
  try {
    const response = await fetch(`https://omdbapi.com/?s=${string}&apikey=${apikey}`);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.json({ error: "Failed to fetch data" });
  }
});

app.get("/api/expand/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const response = await fetch(`https://omdbapi.com/?i=${id}&apikey=${apikey}`);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.json({ error: "Failed to fetch data" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
