import { Express } from "express";
import authRoutes from "./authRoutes";
import exampleRoutes from "./exampleRoutes";

export const setupRouter = (app: Express) => {
    app.use("/auth/", authRoutes);
    app.use("/api/example/", exampleRoutes);
};
