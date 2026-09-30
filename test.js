const { ErlcClient } = require("erlc-api");

const client = new ErlcClient({
    serverKey: "CfjlBnnGkQLDJHkLRxau-yRJmnWEXfgYPdQywbYWddXCYmTSYVmKAODbAwvPT"
});

async function test() {
    try {
        const result = await client.server.queue.get();

        console.log("QUEUE RESULT:");
        console.log(result);
    } catch (error) {
        console.error("QUEUE ERROR:");
        console.error(error);
    }
}

test();