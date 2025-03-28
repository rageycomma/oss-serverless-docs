---
title: Extending and overriding configuration
---

Plugins can extend and override the internal configuration.

To do so, plugins may use the `serverless.extendConfiguration(...)` method.
This is only allowed at pre-init stage of serverless.
The method also takes care of resolving all variables in the given value. But it **does not validate you input** nor the target. Improper usage can cause serverless to fail.

The `serverless.extendConfiguration(configurationPathKeys, value)` method takes two arguments.

| Argument                | Type                      | Description                                                        |
| ----------------------- | ------------------------- | ------------------------------------------------------------------ |
| `configurationPathKeys` | string[]                  | Path of the configuration property to set; must not be empty       |
| `value`                 | string \| object \| array | New value of the configuration property in `configurationPathKeys` |

If configuration in `configurationPathKeys` **does exist** the value will be overwritten.  
If configuration in `configurationPathKeys` **does not exist** the whole path will be created.

You can use it in plugin constructor, or if for some reason configuration extension is resolved asynchronously you may resort to `asyncInit()` method

```js
class MyPlugin {
  constructor(serverless) {
    this.serverless = serverless;

    const value = {
      myKey: 'myValue',
    };
    this.serverless.extendConfiguration(['custom', 'myPlugin'], value);
  }
}

module.exports = MyPlugin;
```

If your plugin needs merging you need to take care of it yourself.

```js
class MyPlugin {
  constructor(serverless) {
    this.serverless = serverless;

    const currentConfig = this.serverless.configurationInput.custom.myPlugin;
    const value = Object.assign(currentConfig, {
      myKey: 'myValue',
    });
    this.serverless.extendConfiguration(['custom', 'myPlugin'], value);
  }
}

module.exports = MyPlugin;
```
