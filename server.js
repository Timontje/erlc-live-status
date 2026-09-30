const express = require("express");
const { ErlcClient } = require("erlc-api");

const app = express();
const PORT = 3000;

const ERLC_SERVER_KEY = "CfjlBnnGkQLDJHkLRxau-yRJmnWEXfgYPdQywbYWddXCYmTSYVmKAODbAwvPT";

const client = new ErlcClient({
    serverKey: ERLC_SERVER_KEY
});

app.use(express.static("public"));

app.get("/api/players", async (req, res) => {
    try {
        const server = await client.server.get();
        const queue = await client.server.queue();

        console.log("SERVER:", server);
        console.log("QUEUE:", queue);

        res.json({
            players: server.CurrentPlayers,
            maxPlayers: server.MaxPlayers,
            queue: Array.isArray(queue) ? queue.length : 0
        });

    } catch (error) {
        console.error("ER:LC ERROR:", error);

        res.status(500).json({
            error: error.message
        });
    }
});

app.listen(PORT, () => {
    console.log("ER:LC Player Counter gestart!");
    console.log("http://localhost:" + PORT);
});