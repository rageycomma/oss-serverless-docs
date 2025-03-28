---
title: print
---

Print your `serverless.yml` config file with all variables resolved.

If you're using [Serverless Variables](../guides/variables.md)
in your `serverless.yml`, it can be difficult to know if your syntax is correct
or if the variables are resolving as you expect.

With this command, it will print the fully-resolved config to your console.

```bash
serverless print
```

## Options

- `format` Print configuration in given format ("yaml", "json", "text"). Default: yaml
- `path` Period-separated path to print a sub-value (eg: "provider.name")
- `transform` Transform-function to apply to the value (currently only "keys" is supported)

## Examples:

Assuming you have the following config file:

```yml
service: my-service

custom:
  bucketName: test

provider:
  name: aws
  runtime: nodejs14.x

functions:
  hello:
    handler: handler.hello

resources:
  Resources:
    MyBucket:
      Type: AWS::S3::Bucket
      Properties:
        BucketName: ${self:custom.bucketName}
```

Using `sls print` will resolve the variables in `provider.stage` and `BucketName`.

```bash
$ sls print
service: my-service
custom:
  bucketName: test
provider:
  name: aws
  runtime: nodejs14.x
  stage: dev # <-- Resolved
functions:
  hello:
    handler: handler.hello
resources:
  Resources:
    MyBucket:
      Type: 'AWS::S3::Bucket'
      Properties:
        BucketName: test # <-- Resolved
```

This prints the provider name:

```bash
sls print --path provider.name --format text
```

And this prints all function names:

```bash
sls print --path functions --transform keys --format text
```
