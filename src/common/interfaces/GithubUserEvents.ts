export interface GithubUserEvents {
  id: string;
  type: string;
  actor: Actor;
  repo: Repo;
  payload: Payload;
  public: boolean;
  created_at: Date;
}

export interface Actor {
  id: number;
  login: string;
  display_login: string;
  gravatar_id: string;
  url: string;
  avatar_url: string;
}

export interface Payload {
  action?: string;
  push_id?: number;
  size?: number;
  distinct_size?: number;
  ref?: string;
  head?: string;
  before?: string;
  commits?: Commit[];
}

export interface Commit {
  sha: string;
  author: Author;
  message: string;
  distinct: boolean;
  url: string;
}

export interface Author {
  email: string;
  name: string;
}

export interface Repo {
  id: number;
  name: string;
  url: string;
}
