import { IsString, MinLength } from 'class-validator';

export class GetGithubProfileDTO {
  @IsString()
  @MinLength(1)
  username: string;
}
