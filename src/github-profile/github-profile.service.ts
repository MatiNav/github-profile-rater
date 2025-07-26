import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GithubUserEvents } from 'src/interfaces/GithubUserEvents';

@Injectable()
export class GithubProfileService {
  private readonly GITHUB_URL = 'https://api.github.com/';

  private githubToken: string;

  constructor(private readonly configService: ConfigService) {
    this.githubToken = this.configService.getOrThrow<string>('githubToken');
  }

  async getProfileRate(username: string): Promise<{ profileRate: number }> {
    // todo: refactor to an adapter
    try {
      const commitsResp = await fetch(
        `${this.GITHUB_URL}users/${username}/events/public?per_page=100`,
        {
          headers: {
            Authorization: `Bearer ${this.githubToken}`,
          },
        },
      );
      const data = (await commitsResp.json()) as
        | GithubUserEvents[]
        | { status: string };

      if ('status' in data) throw data;

      // factory
      const commits = data.filter((item) => item.type === 'PushEvent'); // 20%
      const reviews = data.filter(
        (item) => item.type === 'PullRequestReviewEvent',
      ); // 50%
      const comments = data.filter(
        (item) => item.type === 'PullRequestReviewCommentEvent',
      ); // 30%

      const commitsRate = commits.length > 20 ? 5 : commits.length / 4;
      const commentsRate = comments.length > 20 ? 5 : comments.length / 4;
      const reviewsRate = reviews.length > 5 ? 5 : reviews.length;

      const profileRate = Math.floor(
        (commitsRate + commentsRate + reviewsRate) / 3,
      );

      return { profileRate };
    } catch (error) {
      if ('status' in error && error.status === '404') {
        throw new NotFoundException('User not found.');
      }
      throw new InternalServerErrorException('Please contact support.');
    }
  }
}
