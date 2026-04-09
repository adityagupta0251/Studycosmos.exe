import { Elysia } from "elysia";
import { MiscController } from "../controllers/misc.controller";

const miscController = new MiscController();

export const getStartedRouter = new Elysia()
    .get('/get-started', miscController.getStarted)
