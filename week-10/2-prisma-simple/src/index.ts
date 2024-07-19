import { PrismaClient } from '@prisma/client'
import { createUser, getUser } from './db/user';
import { createTodo, getTodos, updateTodo } from './db/todo';

const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here
  console.log('connected');

    //   ** user related prisma
//   createUser("anshul", "anshul-biro-pass", "anshul soni");

    // let usr = await getUser(2)
    // console.log("user: ", usr);
    
    // ** todo related prisma
    // createTodo(1, "Clg", "going to college")
    // createTodo(1, "gym", "not going to gym")
    // createTodo(3, "school", "going to school")
    // createTodo(2, "cricket", "should play cricket 1h")

    // let usr = await updateTodo(3)
    // console.log("updated todo", usr);
    
    let alltodos = await getTodos(3);
    console.log("all todos: ", alltodos);
    
  console.log("query executed");
  
  
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
// npm run build
// npm run start