import { AiService } from "../services/ai.service";

export class AiController {
  private aiService: AiService;

  constructor() {
    this.aiService = new AiService();
  }

  generateRoadmap = async () => {
    return await this.aiService.generateRoadmap();
  };

  generateCourse = async () => {
    return await this.aiService.generateCourse();
  };

  generateQuiz = async () => {
    return await this.aiService.generateQuiz();
  };

  chat = async () => {
    return await this.aiService.chat();
  };

  roadmapChat = async () => {
    return await this.aiService.roadmapChat();
  };
}
