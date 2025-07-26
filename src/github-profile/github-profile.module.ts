import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CommonModule } from 'src/common/common.module';
import { GithubProfileController } from './github-profile.controller';
import { GithubProfileService } from './github-profile.service';

@Module({
  imports: [ConfigModule, CommonModule],
  controllers: [GithubProfileController],
  providers: [GithubProfileService],
})
export class GithubProfileModule {}
