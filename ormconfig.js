require('@config/env');

const { DB_TYPE, DB_USER, DB_PASS, DB_NAME, DB_HOST } = process.env;

module.exports = [
  {
    type: DB_TYPE || 'postgres',
    name: 'default',
    host: DB_HOST,
    username: DB_USER,
    password: DB_PASS,
    database: DB_TYPE === 'sqlite' ? '__tests__/db.sqlite' : DB_NAME,
    entities: ['src/modules/**/infra/typeorm/entities/*.ts'],
    migrations: ['src/shared/infra/typeorm/migrations/*.ts'],
    cli: {
      migrationsDir: 'src/shared/infra/typeorm/migrations',
    },
    migrationsTableName: '_migrations',
  },
];
