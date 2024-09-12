"use server";
import client from "@/db";

export async function signUp({ email, password }: { email: string, password: string }) {
    try {
        await client.user.create({
            data: {
                email, password
            }
        })
        return 'signup'
    } catch (error) {
        return 'error'
    }
}