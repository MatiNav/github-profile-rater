import { Test, TestingModule } from '@nestjs/testing';
import { GithubProfileService } from './github-profile.service';

describe('GithubProfileService', () => {
  let service: GithubProfileService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GithubProfileService],
    }).compile();

    service = module.get<GithubProfileService>(GithubProfileService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
