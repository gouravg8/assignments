import { Client } from 'pg'
import { DB_URL } from './config';
import { createTables, dropTables } from './db/setup';
import { createUser, getUser } from './db/user';
import { createTodo, getTodos, updateTodo } from './db/todo';

export const client = new Client({
    connectionString: DB_URL
});
client.connect();

// createTables().then(res=>console.log('table created'));

// client.end()

//* create and get user
// createUser('gouav', 'suarpass', 'gourav soni');
// createUser('souav', 'badahalua', 'soorav soni');
// getUser(1);


// * create, update, gettodo
// createTodo(1, "market", "buy chocolate, pasta");
// createTodo(2, "college", "go to college");
// updateTodo(4)
// getTodos(2)

// * drop users, todos tables
// dropTables()