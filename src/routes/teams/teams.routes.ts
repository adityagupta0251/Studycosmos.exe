import { Elysia } from "elysia";

export const teamsRouter = new Elysia()
.group('/teams', (app) =>
        app
            .post('/create-teams', 'Create Teams Endpoint')
            
    )