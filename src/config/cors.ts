import cors from "cors";
import { Express } from "express";

const corsOptions = {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    allowedHeaders: ["Content-Type", "Authorization"],
};

export const setupCors = (app: Express) => {
    app.use(cors(corsOptions));
};
