import { Elysia } from 'elysia'

export const guidesRouter = new Elysia()
    .group('/guides', (app) =>
        app
            .post('/sign-in', 'Sign in')
            .post('/sign-up', 'Sign up')
            .post('/profile', 'Profile')
    )
    

