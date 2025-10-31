# api.near.ai – HTTP 410 Worker

This repository contains the Cloudflare Worker that now powers `api.near.ai`. As of October 31, 2025, the legacy NEAR AI APIs have been retired. All requests to this domain return HTTP 410 (Gone) with a small JSON body.

For full background and deprecation details, see:
- https://github.com/nearai/nearai/blob/main/README.md

## Local development
Prerequisites: Node.js and Wrangler.

```bash
npm install -g wrangler
wrangler dev
```

## Deploy
You can publish using Wrangler once authenticated with Cloudflare:

```bash
wrangler login
wrangler publish
```

## License
MIT
