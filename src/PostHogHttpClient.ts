import axios from 'axios';

class PostHogHttpClient {
  private readonly apiKey: string;
  private readonly projectId: string;

  constructor(options: { apiKey: string; projectId: string }) {
    this.apiKey = options.apiKey;
    this.projectId = options.projectId;
  }

  public async annotate(content: string): Promise<void> {
    const result = await axios.post(
      this.buildUrl(`/projects/${this.projectId}/annotations`),
      { content },
      {
        headers: {
          Authorization: `Bearer ${this.apiKey}`
        }
      }
    );

    if (result.status !== 200) {
      throw new Error(`Failed to annotate: ${result.statusText}`);
    }
  }

  private buildUrl(path: string): string {
    return `https://app.posthog.com/api/${path}`;
  }
}

export default PostHogHttpClient;
