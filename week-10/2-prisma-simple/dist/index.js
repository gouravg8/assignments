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
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const todo_1 = require("./db/todo");
const prisma = new client_1.PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
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
        let alltodos = yield (0, todo_1.getTodos)(3);
        console.log("all todos: ", alltodos);
        console.log("query executed");
    });
}
main()
    .then(() => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.$disconnect();
}))
    .catch((e) => __awaiter(void 0, void 0, void 0, function* () {
    console.error(e);
    yield prisma.$disconnect();
    process.exit(1);
}));
// npm run build
// npm run start
