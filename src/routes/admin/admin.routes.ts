import { Elysia, t } from "elysia";


const adminpermission = (role: string) => `Access granted to ${role}`;
const isUserExists = () => { /* logic */ };

export const adminRouter = new Elysia()
    .guard({
        body: t.Object({
            admincanedit: t.UnionEnum(['dashboard', 'settings', 'playground'])
        })
    })
    .group('/admin', (app) => app
        .post('/dashboard', ({ body }) => adminpermission(body.admincanedit), {
            beforeHandle: isUserExists,
            detail: { summary: 'Admin Dashboard' }
        })
        .post('/settings', ({ body }) => adminpermission(body.admincanedit), {
            beforeHandle: isUserExists,
            detail: { summary: 'Admin Settings' }
        })
        .post('/playground', ({ body }) => adminpermission(body.admincanedit), {
            beforeHandle: isUserExists,
            detail: { summary: 'Admin Playground' }
        })
    );