---
title: AWS Lambda Events
---

Simply put, events are the things that trigger your functions to run.

If you are using AWS as your provider, all `events` in the service are anything in AWS that can trigger an AWS Lambda function, like an S3 bucket upload, an SNS topic, and HTTP endpoints created via API Gateway.

[View the AWS events section for a list of supported events](../events)

Upon deployment, the framework will deploy any infrastructure required for an event (e.g., an API Gateway endpoint) and configure your `function` to listen to it.

Infrastructure which is created to support events in the `events` list may be
referenced using CloudFormation intrinsic functions like `Fn::GetAtt` or
`Fn::Ref` (or their shorthand counterparts). For details on referencing created
resources in AWS, see the [AWS CloudFormation Resource
Reference](./resources.md#aws-cloudformation-resource-reference) section on the
[AWS - Resources](./resources.md) page.

## Configuration

Events belong to each Function and can be found in the `events` property in `serverless.yml`.

```yml
# 'functions' in serverless.yml
functions:
  createUser: # Function name
    handler: handler.createUser # Reference to file handler.js & exported function 'createUser'
    events: # All events associated with this function
      - httpApi: 'POST /users/create'
```

Events are objects, which can contain event-specific information.

The `events` property is an array, because it's possible for functions to be triggered by multiple events, as shown.

You can set multiple Events per Function, as long as that is supported by AWS.

```yml
# 'functions' in serverless.yml
functions:
  createUser: # Function name
    handler: handler.users # Reference to file handler.js & exported function 'users'
    events: # All events associated with this function
      - httpApi: 'POST /users/create'
      - httpApi: 'PUT /users/update'
      - httpApi: 'DELETE /users/delete'
```

## Types

The OSS Serverless supports all of the AWS Lambda events and more. Instead of listing them here, we've put them in a separate section, since they have a lot of configurations and functionality. [Check out the events section for more information.](../events)

## PathParameters

HTTP events can be configured to pass in path parameters to your lambda function. [See the API Gateway event for more details.](../events/apigateway.md#request-parameters)

```yml
# 'functions' in serverless.yml
functions:
  createUser: # Function name
    handler: handler.users # Reference to file handler.js & exported function 'users'
    events: # All events associated with this function
      - httpApi: 'GET /users/{id}'
```

## Deploying

To deploy or update your Functions, Events and Infrastructure, run `serverless deploy`.
