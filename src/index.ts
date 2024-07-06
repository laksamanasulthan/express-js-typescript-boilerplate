import express from "express";
import helmet from "helmet";
import { loggerMiddleware } from "./app/middlewares/loggerMiddleware";
import { setupCors } from "./config/cors";
import { DatabaseConnection } from "./config/database";
import passport from "./config/passport";
import { setupSwagger } from "./config/swagger";
import { setupRouter } from "./routes/routes";

const app = express();

app.use(helmet());
app.use(express.json());
app.use(passport.initialize());
app.use(loggerMiddleware);

setupCors(app);
setupRouter(app);
setupSwagger(app);

DatabaseConnection.initialize()
    .then(async () => {
        console.log("Connected to the database");
    })
    .catch((error) => console.log("Database connection error:", error));

app.listen(process.env.APP_PORT, () => {
    console.log(`Server is running on port ${process.env.APP_PORT}`);
});
