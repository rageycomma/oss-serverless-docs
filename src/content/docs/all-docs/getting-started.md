---
title: Setting Up OSS Serverless With AWS
---

Get started with OSS Serverless’s open-source CLI and Amazon Web Services in minutes.

## Installation

Install `osls` module via NPM:

```bash
npm install -g osls
```

_If you don’t already have Node.js on your machine, [install it first](https://nodejs.org/)._

## Creating A Service

To create your first project (known as a OSS Serverless "Service"), run the `serverless` command below, then follow the prompts.

```bash
# Create a new serverless project
serverless

# Move into the newly created directory
cd your-service-name
```

The `serverless` command will guide you to:

1. Create a new project
2. Configure your [AWS credentials](./guides/credentials.md)

Your new serverless project will contain a `serverless.yml` file. This file features simple syntax for deploying infrastructure to AWS, such as AWS Lambda functions, infrastructure that triggers those functions with events, and additional infrastructure your AWS Lambda functions may need for various use-cases. You can learn more about this in the [Core Concepts documentation](./guides/intro.md).

The `serverless` command will give you a variety of templates to choose from. If those do not fit your needs, check out the [project examples from Serverless Inc. and our community](https://github.com/serverless/examples). You can install any example by passing a GitHub URL using the `--template-url` option:

```base
serverless --template-url=https://github.com/serverless/examples/tree/v3/...
```

Please note that you can use `serverless` or `sls` to run OSS Serverless commands.

## Deploying

If you haven't done so already within the `serverless` command, you can deploy the project at any time by running:

```bash
sls deploy
```

The deployed AWS Lambda functions and other essential information such as API Endpoint URLs will be displayed in the command output.

More details on deploying can be found [here](./guides/deploying.md).

## Developing On The Cloud

Many OSS Serverless users choose to develop on the cloud, since it matches reality and emulating Lambda locally can be complex. To develop on the cloud quickly, without sacrificing speed, we recommend the following workflow...

To deploy code changes quickly, skip the `serverless deploy` command which is much slower since it triggers a full AWS CloudFormation update. Instead, deploy code and configuration changes to individual AWS Lambda functions in seconds via the `deploy function` command, with `-f [function name in serverless.yml]` set to the function you want to deploy.

```bash
sls deploy function -f my-api
```

More details on the `deploy function` command can be found [here](./cli-reference/deploy-function.md).

To invoke your AWS Lambda function on the cloud, you can find URLs for your functions w/ API endpoints in the `serverless deploy` output, or retrieve them via `serverless info`. If your functions do not have API endpoints, you can use the `invoke` command, like this:

```bash
sls invoke -f hello

# Invoke and display logs:
serverless invoke -f hello --log
```

More details on the `invoke` command can be found [here](./cli-reference/invoke.md).

## Developing Locally

Many OSS Serverless users rely on local emulation to develop more quickly. Please note, emulating AWS Lambda and other cloud services is never accurate and the process can be complex. We recommend the following workflow to develop locally...

Use the `invoke local` command to invoke your function locally:

```bash
sls invoke local -f my-api
```

You can also pass data to this local invocation via a variety of ways. Here's one of them:

```bash
serverless invoke local --function functionName --data '{"a":"bar"}'
```

More details on the `invoke local` command can be found [here](./cli-reference/invoke-local.md)

OSS Serverless also has a great plugin that allows you to run a server locally and emulate AWS API Gateway. This is the `serverless-offline` command.

More details on the **serverless-offline** plugins command can be found [here](https://github.com/dherault/serverless-offline)

## Remove Your Service

If you want to delete your service, run `remove`. This will delete all the AWS resources created by your project and ensure that you don't incur any unexpected charges. It will also remove the service from Serverless Dashboard.

```bash
sls remove
```

More details on the `remove` command can be found [here](./cli-reference/remove.md).
