const app = require("./app.js");
const path = require("path");
const readJsonFile = require("./readJsonFile.js");

const getDataLocation = () => {
    return path.join(__dirname, "songs.json");
}

app.get('/api/songs/:name', (req, res) => {
    const song = req.params.name
    const output = readJsonFile(getDataLocation())
    const songDetails = output.find(s => s.song == song);

    if (!songDetails) {
        res.status(404);
        res.send("song not available...");
    }

    res.send(songDetails);
})

app.get("/api/songs", (req, res) => {
    const output = readJsonFile(getDataLocation());
    res.send(output);
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`app listening at http://localhost:${PORT}`);
});
