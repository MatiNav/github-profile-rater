import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GithubUserEvents } from 'src/interfaces/GithubUserEvents';

@Injectable()
export class GithubProfileService {
  private readonly GITHUB_URL = 'https://api.github.com/';

  private githubToken: string;

  constructor(private readonly configService: ConfigService) {
    this.githubToken = this.configService.getOrThrow<string>('githubToken');
  }

  async getProfileRate(): Promise<any> {
    const commitsResp = await fetch(
      `${this.GITHUB_URL}users/c9s/events/public?per_page=100`,
      {
        headers: {
          Authorization: `Bearer ${this.githubToken}`,
        },
      },
    );
    const data = (await commitsResp.json()) as GithubUserEvents[];

    const commits = data.filter((item) => item.type === 'PushEvent'); // 20%
    const reviews = data.filter(
      (item) => item.type === 'PullRequestReviewEvent',
    ); // 50%
    const comments = data.filter(
      (item) => item.type === 'PullRequestReviewCommentEvent',
    ); // 30%

    return { commits, reviews, comments };
  }
}
