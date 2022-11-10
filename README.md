# Generate Unique System Key

Unique system key generator.

## Installation

If this is a brand new project, make sure to create a package.json first with the `npm init` command.

Installation is done using the npm install command:

```
npm install generate-syskey
```

## CommonJS Example

```ts
const { default: generateSyskey } = require("generate-syskey");

generateSyskey(); // 5286016133796023000
```

## ES module Example

```ts
import generateSyskey from "generate-syskey";

generateSyskey(); // 5286016133796023000
```
