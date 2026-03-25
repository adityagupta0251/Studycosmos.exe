import { Elysia } from "elysia";

export const premiumRouter = new Elysia()
    .get('/premium', () => 'Welcome to the Premium Features! Unlock exclusive content and advanced tools to enhance your learning experience.')