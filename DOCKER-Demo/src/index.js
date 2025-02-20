const app = require("express")();

app.get("/", (req, res) => res.json({ message: "Docker is ready!" }));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () =>
    console.log(`app listening on http://localhost:${PORT}`)
);
