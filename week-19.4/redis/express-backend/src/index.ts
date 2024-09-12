import express, { Request, Response } from 'express';
import { createClient } from 'redis';
const PORT = 3000;

const app = express();
app.use(express.json())

const red = createClient();

async function main() {
    await red.connect();
}
main();

app.post("/submit", async (req: Request, res: Response) => {
    try {
        const { userId, code, lang } = req.body;
        const resOut = await red.lPush("submission", JSON.stringify({ userId, code, lang }));
        res.json({ msg: "code submitted", resOut });
    } catch (error) {
        console.error(error);
    }
})


app.listen(PORT, () => {
    console.log("server is running on port:", PORT);
})
