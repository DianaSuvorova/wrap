# wrap
graphql-tools: executor + local schema

To run: `npm install && node index` inside the repo

This throws below error:

```
file:///Users/diana.suvorova/Dev/wrap/node_modules/@graphql-tools/utils/index.mjs:681
    const queryType = schema.getQueryType();
                             ^

TypeError: schema.getQueryType is not a function
    at getRootTypeMap (file:///Users/diana.suvorova/Dev/wrap/node_modules/@graphql-tools/utils/index.mjs:681:30)
    at memoized (file:///Users/diana.suvorova/Dev/wrap/node_modules/@graphql-tools/utils/index.mjs:487:30)
    at generateProxyingResolvers (file:///Users/diana.suvorova/Dev/wrap/node_modules/@graphql-tools/wrap/index.mjs:11:25)
    at wrapSchema (file:///Users/diana.suvorova/Dev/wrap/node_modules/@graphql-tools/wrap/index.mjs:76:31)
    at file:///Users/diana.suvorova/Dev/wrap/index.js:85:17
    at ModuleJob.run (internal/modules/esm/module_job.js:145:37)
    at async Loader.import (internal/modules/esm/loader.js:182:24)
    at async Object.loadESM (internal/process/esm_loader.js:68:5)
 ```
 
For the example I use this Demo GraphQL API: https://api.mocki.io/playground?endpoint=https://api.mocki.io/v2/c4d7a195/graphql
