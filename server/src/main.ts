import logger from "./utils/logger";
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import helmet from "helmet";

import userRoutes from "./modules/user/route";
import authRoutes from "./modules/auth/routes";
import videoRoutes from "./modules/videos/routes";

import { connectToDatabase, disconnectFromDatabase } from "./utils/database";
import { CORS_ORIGIN } from "./constants";
import deserializeUser from "./middleware/deserializeUser";

const PORT = process.env.PORT || 4000;

const app = express();
// middleware
app.use(cookieParser());
app.use(express.json());
app.use(
    cors({
        origin: CORS_ORIGIN,
        credentials: true,
    })
);
app.use(helmet());
app.use(deserializeUser);

// app routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/videos", videoRoutes);

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
