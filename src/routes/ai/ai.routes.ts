import { Elysia } from "elysia";
import { AiController } from "../../controllers/ai.controller";

const aiController = new AiController();

export const aiRouter = new Elysia({ prefix: "/ai" })
  .post('/roadmap', aiController.generateRoadmap)
  .post('/course', aiController.generateCourse)
  .post('/quiz', aiController.generateQuiz)
  .post('/chat', aiController.chat)
  .post('/roadmap-chat', aiController.roadmapChat);
