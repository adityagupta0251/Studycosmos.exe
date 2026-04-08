import { ProjectsService } from "../services/projects.service";

export class ProjectsController {
  private projectsService: ProjectsService;

  constructor() {
    this.projectsService = new ProjectsService();
  }

  listProjects = async () => {
    return await this.projectsService.listProjects();
  };

  createProject = async ({ user }: { user: any }) => {
    // In a real scenario, we would pass user.id to the service
    return await this.projectsService.createProject();
  };

  getProjectDetails = async ({ params }: { params: { id: string } }) => {
    return await this.projectsService.getProjectDetails(params.id);
  };

  updateProject = async ({ params, body, user }: { params: { id: string }; body: { checkifprojectadmin: string }; user: any }) => {
    return await this.projectsService.updateProject(params.id, body.checkifprojectadmin);
  };

  deleteProject = async ({ params, body, user }: { params: { id: string }; body: { checkifprojectadmin: string }; user: any }) => {
    return await this.projectsService.deleteProject(params.id, body.checkifprojectadmin);
  };
}
