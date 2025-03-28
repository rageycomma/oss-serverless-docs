---
title: info
---

Displays information about the deployed service.

```bash
serverless info
```

## Options

- `--stage` or `-s` The stage in your service you want to display information about.
- `--region` or `-r` The region in your stage that you want to display information about.
- `--verbose` Shows displays any Stack Output.

## Provided lifecycle events

- `info:info`

## Examples

### AWS

On AWS the info plugin uses the `Outputs` section of the CloudFormation stack and the AWS SDK to gather the necessary information.
See the example below for an example output.

**Example:**

```bash
$ serverless info

Service Information
service: my-serverless-service
stage: dev
region: us-east-1
api keys:
  myKey: some123valid456api789key1011for1213api1415gateway
endpoints:
  GET - https://dxaynpuzd4.execute-api.us-east-1.amazonaws.com/dev/users
functions:
  my-serverless-service-dev-hello
```

#### Verbose

When using the `--verbose` flag, the `info` command will also append all Stack Outputs to the output:

```bash
$ serverless info --verbose

Service Information
service: my-serverless-service
stage: dev
region: us-east-1
api keys:
  myKey: some123valid456api789key1011for1213api1415gateway
endpoints:
  GET - https://dxaynpuzd4.execute-api.us-east-1.amazonaws.com/dev/users
functions:
  my-serverless-service-dev-hello

Stack Outputs
CloudFrontUrl: d2d10e2tyk1pei.cloudfront.net
ScreenshotBucket: dev-svdgraaf-screenshots
ServiceEndpoint: https://12341jc801.execute-api.us-east-1.amazonaws.com/dev
ServerlessDeploymentBucketName: lambda-screenshots-dev-serverlessdeploymentbucket-15b7pkc04f98a
```
