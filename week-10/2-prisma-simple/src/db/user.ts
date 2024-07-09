import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


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
    try {
        const user = prisma.user.create({data: {username,password ,name}})
        console.log("user added: " , user);
        return user;
    } catch (error) {
       console.log('err create user: ', error);
    }
    
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
        const user = await prisma.user.findFirst({where:{id:userId}}).catch(error=>console.log("err get user: ", error))
        
        return user;
}
