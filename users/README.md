# ReactJS website with NodeJS using GraphQL

## Dependencies
### Json Server (https://github.com/typicode/json-server)
* **Install globaly:** `npm install -g json-server`

## Run on Visual Studio Code (VSCODE)
1. Press `cmd + task` and then type `serve` to initialize json server.
1. Press `F5` to start NodeJS server.

## Outside VSCODE
1. On Terminal/CMD `cd [project_folder]` and type `npm run json:server`.
1. Open another terminal, `cd [project_folder]` and type `npm run dev`.

## On Browser
Navigate to http://localhost:4000/graphql and play.

## Important noticed!!
GraphiQL will be available **ONLY** if it is enabled on `server.js` file in next section:

```
app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}));
```

setting `graphiql: true`