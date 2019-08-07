const express = require('express')
const app = express();

const PORT = 4000;

function handleListening() {
    console.log(`Listening on: http://localhost:${PORT}`);
}

function handleHome(req, res) {
    res.send("Hello xxonbang!!!!");
}

function handleProfile(req, res) {
    res.send("Profile Page!!!!");

}

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);