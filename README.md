# NodeJS with Typescript example

This is a bare-bones project showing how to write a simple NodeJS application
using Typescript and Visual Studio Code.

It also shows how to use `import` rather than `require` to use depenencies.

## Package dependencies

### Sourcing environment variables

To set process environment variables from `.env` files:

```shell
npm install dotenv
```

The `.env` file is not committed to this repository since it may typically
contain private API keys or other secrets.

### Utilities

Here, `lodash` and `faker` are just example modules that happened to be useful.

```shell
npm install lodash
npm install --save-dev @types/lodash
npm install --save-dev @faker-js/faker
```

### Typescript

`ts-node` is used to dynamically transpile the Typescript code to Javascript
when launching from Visual Studio Code.

The other dependencies here are standard Typescript, and the type-definitions
for the utility libraries imported above.

```shell
npm install --save-dev typescript
npm install --save-dev ts-node
npm install --save-dev @tsconfig/node16
npm install --save-dev @types/node
npm install --save-dev @types/lodash
```

## tsconfig.json

A very simple Typescript configuration is all that is needed:

```json
{
  "extends": "@tsconfig/node16/tsconfig.json",
  "compilerOptions": {},
  "include": ["src"],
  "exclude": ["node_modules"]
}
```

## Visual Studio Code Launch Configuration

In `.vscode/launch.json`, use `ts-node` to launch the application directly,
without a manual compilation step:

```json
{
    "version": "0.1.0",
    "configurations": [
      {
        "name": "Debug main.ts",
        "type": "node",
        "request": "launch",
        "cwd": "${workspaceRoot}",
        "runtimeArgs": ["-r", "ts-node/register"],
        "args": ["${workspaceRoot}/src/main.ts"]
      }
    ]
}
```

## References

This article was very helpful:

https://blog.appsignal.com/2022/01/19/how-to-set-up-a-nodejs-project-with-typescript.html
