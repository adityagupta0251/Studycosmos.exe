export class ProjectsService {
  adminPermission(role: string) {
    return `Access granted to ${role}`;
  }

  async listProjects() {
    return "List of projects Ideas";
  }

  async createProject() {
    return "Create a new project idea";
  }

  async getProjectDetails(id: string) {
    return `Details of project with ID: ${id}`;
  }

  async updateProject(id: string, role: string) {
    return `Update ${id}: ${this.adminPermission(role)}`;
  }

  async deleteProject(id: string, role: string) {
    return `Delete ${id}: ${this.adminPermission(role)}`;
  }
}
