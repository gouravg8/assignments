import { PrismaClient } from "@prisma/client";
import bcryptjs from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  // ... you will write your Prisma Client queries here
  let pass = "gouravbiro";
  try {
    let password = await bcryptjs.hash(pass, 10);
    let user = await prisma.user.create({
      data: {
        username: "gourav",
        password,
      },
    });
    console.log(user);
  } catch (error) {
    console.error(error);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
