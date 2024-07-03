import { client } from "..";
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

//     ALTER TABLE todos
// ADD CONSTRAINT fk_user_id FOREIGN KEY (user_id) REFERENCES users(id);


   const q = `INSERT INTO todos (user_id, title, description)
VALUES ($1, $2, $3)`;
   const vals = [userId, title, description];
   const res = await client.query(q, vals) 
   console.log("todo added");
   return res;
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
    const q = `UPDATE todos SET done = true WHERE id = $1 RETURNING id`;
    const res = await client.query(q, [todoId]);
    console.log("todo updated");
    return res; 
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
    const q =  `SELECT *
            FROM todos
            WHERE user_id = $1`;
    const val = [userId]
    const res = await client.query(q, val);
    console.log("all todos", ...res.rows);
    return res.rows; 
}