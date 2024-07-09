import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

/*
 * Function should insert a new todo for this user
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function createTodo(userId: number, title: string, description: string) {
    let todo;
   try {
    todo = await prisma.todo.create({data:{title, description, userId}})
   } catch (error) {
    console.log("err createTodo: ", error);
   } 
   return todo;
}
/*
 * mark done as true for this specific todo.
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function updateTodo(todoId: number) {
    let todo;
    try {
        todo = await prisma.todo.update({data: {done: true}, where:{id:todoId}})
    } catch (error) {
       console.log("err updateTodo: ", error);
    }
    return todo;
}

/*
 *  Get all the todos of a given user
 * Should return an array of todos
 * [{
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }]
 */
export async function getTodos(userId: number) {
    let todos;
    try {
        todos = await prisma.todo.findMany({where:{userId}})
    } catch (error) {
       console.log("err getTodos: ", error);
    }
    return todos;
}