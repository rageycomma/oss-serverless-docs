---
title: CloudWatch Log
---

## Simple event definition

This will enable your Lambda function to be called by a Log Stream.

```yml
functions:
  myCloudWatchLog:
    handler: myCloudWatchLog.handler
    events:
      - cloudwatchLog: '/aws/lambda/hello'
```

**WARNING**: If you specify several CloudWatch Log events for one AWS Lambda function you'll only see the first subscription in the AWS Lambda Web console. This is a known AWS problem but it's only graphical, you should be able to view your CloudWatch Log Group subscriptions in the CloudWatch Web console.

## Specifying a filter

Here's an example how you can specify a filter rule.

For more information about the filter pattern syntax, see [Filter and Pattern Syntax](http://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/FilterAndPatternSyntax.html)

```yml
functions:
  myCloudWatchLog:
    handler: myCloudWatchLog.handler
    events:
      - cloudwatchLog:
          logGroup: '/aws/lambda/hello'
          filter: '{$.userIdentity.type = Root}'
```

### Example

Update your `serverless.yml` file as follows and run `serverless deploy`.

```yml
functions:
  hello1:
    handler: handler.hello1
    events:
      - cloudwatchLog: '/aws/lambda/hello1'
  hello2:
    handler: handler.hello2
    events:
      - cloudwatchLog: '/aws/lambda/hello2'
```

Next up, edit `serverless.yml` and swap out the `logGroup` names. After that run `serverless deploy` again (the deployment will fail).

```yml
functions:
  hello1:
    handler: handler.hello1
    events:
      - cloudwatchLog: '/aws/lambda/hello2'
  hello2:
    handler: handler.hello2
    events:
      - cloudwatchLog: '/aws/lambda/hello1'
```
