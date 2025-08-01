export const Environment = () => ({
  dbPassword: process.env.DB_PASSWORD,
  dbName: process.env.DB_NAME,
  dbHost: process.env.DB_HOST,
  dbPort: process.env.DB_PORT,
  dbUsername: process.env.DB_USERNAME,
  port: process.env.PORT,
  hostApi: process.env.HOST_API,
  githubToken: process.env.GITHUB_TOKEN,
});
