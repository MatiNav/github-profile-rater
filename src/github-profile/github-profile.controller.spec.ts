import { Test, TestingModule } from '@nestjs/testing';
import { GithubProfileController } from './github-profile.controller';
import { GithubProfileService } from './github-profile.service';

describe('GithubProfileController', () => {
  let controller: GithubProfileController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GithubProfileController],
      providers: [GithubProfileService],
    }).compile();

    controller = module.get<GithubProfileController>(GithubProfileController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
