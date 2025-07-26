import { Controller, Get } from '@nestjs/common';
import { GithubProfileService } from './github-profile.service';

@Controller('github-profile')
export class GithubProfileController {
  constructor(private readonly githubProfileService: GithubProfileService) {}

  @Get()
  async getProfileRate(): Promise<string> {
    return await this.githubProfileService.getProfileRate();
  }
}
