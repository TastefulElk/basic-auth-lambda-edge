# Basic Authentication with Lambda@Edge

Backing code for <https://dev.to/tastefulelk/basic-authentication-with-lambda-edge-23o5>

## Install

`npm install`

## Deploy

You need to specify the `CLOUDFRONT_DISTRIBUTION_ID` environment variable with the Id of the Cloudfront Distribution that you want to attach the Basic Auth lambda to.

Example

```sh
CLOUDFRONT_DISTRIBUTION_ID=abc123
npx sls deploy
```
