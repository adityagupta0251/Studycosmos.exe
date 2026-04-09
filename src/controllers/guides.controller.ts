import { GuidesService } from "../services/guides.service";

export class GuidesController {
  private guidesService: GuidesService;

  constructor() {
    this.guidesService = new GuidesService();
  }

  signIn = async () => {
    return await this.guidesService.signIn();
  };

  signUp = async () => {
    return await this.guidesService.signUp();
  };

  profile = async ({ user }: { user: any }) => {
    return {
      message: 'Profile retrieved successfully',
      user
    };
  };
}
