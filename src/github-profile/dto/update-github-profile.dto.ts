import { PartialType } from '@nestjs/mapped-types';
import { CreateGithubProfileDto } from './create-github-profile.dto';

export class UpdateGithubProfileDto extends PartialType(CreateGithubProfileDto) {}
