import { createClient } from "redis";


const red = createClient();

async function main() {
    try {
        await red.connect();
        while (1) {
            await new Promise((resolve) => setTimeout(resolve, 1000))
            const res = await red.brPop("submission", 0);
            console.log(res)
        }
    } catch (error) {
        console.error(error);
    }
}

main();