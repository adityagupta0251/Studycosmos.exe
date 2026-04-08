import { MiscService } from "../services/misc.service";

export class MiscController {
  private miscService: MiscService;

  constructor() {
    this.miscService = new MiscService();
  }

  getStarted = async () => {
    return await this.miscService.getStarted();
  };

  getPremium = async () => {
    return await this.miscService.getPremium();
  };
}
