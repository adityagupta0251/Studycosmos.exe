export class CourseService {
  async getCourseById(id: string) {
    return {
      message: `Course details for course ID: ${id}`,
    };
  }

  async createCourse(data: any) {
    return { message: "Course created!", data };
  }
}
