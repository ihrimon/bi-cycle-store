# Project Setup

### Project initialize command

```
npm init -y
```

### Install express mongoose cors dotenv install

```
npm install express
```

```
npm install cors
```

```
npm install dotenv
```

```
npm install mongoose --save
```

### typescript install and configuaration and run on server

```
npm install typescript --save-dev
```

```
tsc -init
```

```
npm i ts-node-dev --save-dev
```

```
ts-node-dev --respawn --transpile-only server.ts
```

### Root Dir and Out Directory in 'tsconfig.json'

```
{
  "rootDir": "./src
"outDir": "./dist"
}
```

### add script in package.json

```
{
  "build": "tsc"
  "start:production": "node ./dist/server.js",
  "start:development" : "ts-node-dev --respawn --transpile-only src/server.ts",
}
```

### type definition for node express cors

```
npm i --save-dev @types/node
```
```
npm i --save-dev @types/express
```
```
npm i --save-dev @types/cors
```

### add 'devDependencies'

```
npm install eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev
```

### eslint initialize

```
npx eslint --init
```

### add in eslint.config.mjs

```
{
    ignores: ["node_modules", "dist"],
    rules: {
      "no-unused-vars": "error",
    },
}
```

### add scripts for eslint in the 'package.json' file.

```
{
  "scripts": {
    "lint": "eslint src/**/*.ts",
    "lint:fix": "eslint src/**/*.ts --fix"
  },
}
```

### Add the prettier package

```
npm i -D --exact prettier
```

## create .prettierrc file and add this

```
{
  "semi": true,
  "singleQuote": true
}
```

### create .prettierignore file and add dist

```
dist
```

### add script in 'package.json' file

```
"prettier": "prettier . --write"
```

# Project Features:

### Bicycle Product CRUD Operations Features:

Create: Add a new bicycle to the store.
-Read: Retrieve a list of bicycles or a single bicycle.
-Update: Edit an existing bicycle's details.
-Delete: Remove a bicycle from the store.

### Order Bicycle Features:

-Create Order: Allow users to order bicycles.
-Order Details: Store the order details, including the customer email, bicycle info, quantity, and price.
-Revenue: Seller get the total revenue for total or specific product.
