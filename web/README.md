# Website

The website automatically reflects the status of pull requests and renders the articles from all pull requests into a single webpage, making it easy to search and give feedback. It is primarily for internal use.

## Develop

```bash
bun i
bun run dev 
# npm would work too
```

## Deploy

While Cloudflare Pages is the preferred hosting platform, you can deploy to Vercel or any other platform with minimal adjustments. Alternatively, self-hosting is supported, and for that, you should refer to the SolidStart documentation.

Important: 
- Ensure that web/.env exists and is populated with the necessary environment variables.
  - `GITHUB_ACCESS_TOKEN` : A GitHub Personal Access Token is required to bypass GitHub's API rate limits

# Cache

Due to GitHub's API rate limits, the website utilizes a cache store to minimize API requests. Redeploying the website will clear out this cache.

# Support
Reach out to vantri@duck.com if you have any questions.