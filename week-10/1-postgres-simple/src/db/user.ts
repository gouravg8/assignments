import { client } from "..";

/*
 * Should insert into the users table
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function createUser(username: string, password: string, name: string) {
   const user = `INSERT INTO users (username, password, name) VALUES ($1, $2, $3) RETURNING id`;
   const insertedVal = [username, password, name]
   let res = await client.query(user, insertedVal) 
   console.log("user created");
   return res; 
}

/*
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function getUser(userId: number) {
    const getUserQ = `SELECT * FROM users WHERE id = $1`;
    const val = [userId]
    let res = await client.query(getUserQ, val)

    console.log('user is: ', res.rows[0]);
//    return res; 
}
