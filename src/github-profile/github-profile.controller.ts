import { Controller, Get, Query } from '@nestjs/common';
import { GetGithubProfileDTO } from './dto/get-github-profile.dto';
import { GithubProfileService } from './github-profile.service';

@Controller('github-profile')
export class GithubProfileController {
  constructor(private readonly githubProfileService: GithubProfileService) {}

  @Get()
  async getProfileRate(@Query() { username }: GetGithubProfileDTO) {
    return await this.githubProfileService.getProfileRate(username);
  }
}
