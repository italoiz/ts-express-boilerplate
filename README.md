## Express + Typescript Boilerplate

This project offers a fast startup for projects based on Express and Typescript, with initial setup, it stays easy to focus on what's important.

This project is preconfigured with `ESLint`, `Prettier`, `Typescript`, `Typescript Node Dev (ts-node-dev)`, `Dockerfile`, `Husky`, `Lint Staged`, `Jest`, `TypeORM`. You save quite a time of work in some of these configs 😊

### Environment Variables

Check the list of environment variables and what each one means in the application. Copy the `.env.example` file at the root of the project and change it to your needs.

| Variable                  | Description                                                                                             |
| :------------------------ | :------------------------------------------------------------------------------------------------------ |
| **NODE_ENV**              | Development environment                                                                                 |
| **DEBUG_PREFIX**          | The prefix used in the [debug](https://www.npmjs.com/package/debug) library to display logs in runtime. |
| **DEBUG**                 | the filter used in the [debug](https://www.npmjs.com/package/debug) library. Use `*` to see all.        |
| **PORT**                  | The listen port to execute the application                                                              |
| **AGENDA_CONNECTION_URI** | The URI of MongoDB to storage [Agenda](https://www.npmjs.com/package/agenda) jobs                       |
| **AGENDA_COLLECTION**     | Name of collection to storage [Agenda](https://www.npmjs.com/package/agenda) jobs                       |
| **DB_DIALECT**            | Database dialect used in Sequelize config options                                                       |
| **DB_USER**               | User of database used                                                                                   |
| **DB_PASS**               | Password of database used                                                                               |
| **DB_NAME**               | Database name passed to Sequelize options                                                               |
| **DB_HOST**               | Database host passed to Sequelize options                                                               |
| **API_PREFIX**            | The API prefix to use on all registered routes. Default prefix is `/api`.                               |

### Licence

MIT &copy; [Italo Izaac](https://github.com/italoiz)
