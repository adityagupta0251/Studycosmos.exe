import { Elysia, t } from "elysia";

const adminpermission = (role: string) => `Access granted to ${role}`;
const isUserExists = () => {
    /* logic */
};

export const projectsRouter = new Elysia()

    .guard({
        body: t.Object({
            checkifprojectadmin: t.UnionEnum(["dashboard", "settings", "playground"]),
        }),
    })

    .group("/projects", (app) =>
        app
            .get("/list", () => "List of projects Ideas")
            .post("/create", () => "Create a new project idea")
            .get(
                "/projects/:id",
                ({ params: { id } }) => `Details of project with ID: ${id}`,
            )
            .put(
                "/update-projects/:id",
                ({ params: { id }, body }) =>
                    `Update ${id}: ${adminpermission(body.checkifprojectadmin)}`,
                {
                    detail: { summary: "Update project with ID" },
                },
            )
            .delete(
                "/delete-projects/:id",
                ({ params: { id }, body }) =>
                    `Delete ${id}: ${adminpermission(body.checkifprojectadmin)}`,
                {
                    detail: { summary: "Admin Project Deletion" },
                },
            ),
    );

//     import { Elysia, t } from "elysia";

// const adminpermission = (role: string) => `Access granted to ${role}`;
// const isUserExists = () => { /* logic or throw error */ };

// export const projectsRouter = new Elysia()
//     .group('/admin', (app) => app
//         // Apply the guard ONLY to routes that actually need the 'admincanedit' body
//         .guard({
//             body: t.Object({
//                 admincanedit: t.UnionEnum(['dashboard', 'settings', 'playground'])
//             }),
//             beforeHandle: isUserExists
//         }, (adminApp) => adminApp
//             .post('/projects', ({ body }) => `Create project: ${adminpermission(body.admincanedit)}`)
//             .put('/projects/:id', ({ params: { id }, body }) => `Update ${id}: ${adminpermission(body.admincanedit)}`)
//             .delete('/projects/:id', ({ params: { id }, body }) => `Delete ${id}: ${adminpermission(body.admincanedit)}`, {
//                 detail: { summary: 'Admin Project Deletion' }
//             })
//         )
//         // Public or Body-less routes stay outside that specific guard
//         .get('/projects', () => 'List of projects Ideas')
//         .get('/projects/:id', ({ params: { id } }) => `Details of project with ID: ${id}`)
//     );
