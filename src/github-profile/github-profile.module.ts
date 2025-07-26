import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GithubProfileController } from './github-profile.controller';
import { GithubProfileService } from './github-profile.service';

@Module({
  imports: [ConfigModule],
  controllers: [GithubProfileController],
  providers: [GithubProfileService],
})
export class GithubProfileModule {}
