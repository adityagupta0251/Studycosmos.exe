import { Elysia } from "elysia";
import { MiscController } from "../controllers/misc.controller";

const miscController = new MiscController();

export const premiumRouter = new Elysia()
    .get('/premium', miscController.getPremium)
