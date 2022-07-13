import { logger } from "@typegoose/typegoose/lib/logSettings";
import express from "express";
import { connectToDatabase, disconnectFromDatabase } from "./utils/database";

const PORT = process.env.PORT || 4000;

const app = express();

const server = app.listen(PORT, async () => {
    await connectToDatabase();
    logger.info(`Server listening at http://localhost:${PORT}`);
});

const signals = ["SIGTERM", "SIGINT"];

function gracefulShutdown(signal: string) {
    process.on(signal, async () => {
        logger.info("Received signal:", signal);
        server.close();

        // disconnect from the database
        await disconnectFromDatabase();

        logger.info("Server Shutdown");

        process.exit(0);
    });
}

for (let i = 0; i < signals.length; i++) {
    gracefulShutdown(signals[i]);
}
