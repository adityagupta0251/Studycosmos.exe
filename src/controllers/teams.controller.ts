import { TeamsService } from "../services/teams.service";

export class TeamsController {
  private teamsService: TeamsService;

  constructor() {
    this.teamsService = new TeamsService();
  }

  createTeam = async ({ user }: { user: any }) => {
    return await this.teamsService.createTeam();
  };
}
