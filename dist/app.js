"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const dotenv_1 = __importDefault(require("dotenv"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const database_1 = require("./database");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use((0, helmet_1.default)());
app.use(express_1.default.json());
app.use('/api/users', userRoutes_1.default);
(0, database_1.connectDB)().then(() => {
    console.log('Connected to the database');
}).catch((error) => {
    console.log('Database connection error:', error);
});
exports.default = app;
