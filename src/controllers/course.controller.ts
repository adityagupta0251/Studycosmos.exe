import { CourseService } from "../services/course.service";

export class CourseController {
  private courseService: CourseService;

  constructor() {
    this.courseService = new CourseService();
  }

  getCourse = async ({ params }: { params: { id: string } }) => {
    return await this.courseService.getCourseById(params.id);
  };

  createCourse = async ({ body }: { body: any }) => {
    return await this.courseService.createCourse(body);
  };
}
