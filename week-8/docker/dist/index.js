"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 3000;
app.get("/", (req, res) => {
    res.json({ message: "hello from home" });
});
app.get("/suar", (req, res) => {
    res.json({ message: "hello suar biro" });
});
app.listen(PORT, () => console.log(`port is start on ${PORT}`));
