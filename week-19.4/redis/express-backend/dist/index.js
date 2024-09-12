"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const redis_1 = require("redis");
const PORT = 3000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
const red = (0, redis_1.createClient)();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield red.connect();
    });
}
main();
app.post("/submit", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId, code, lang } = req.body;
        const resOut = yield red.lPush("submission", JSON.stringify({ userId, code, lang }));
        res.json({ msg: "code submitted", resOut });
    }
    catch (error) {
        console.error(error);
    }
}));
app.listen(PORT, () => {
    console.log("server is running on port:", PORT);
});
