import { Sequelize } from 'sequelize';
import Env from '../../env.js';

const env = new Env();

const sequelize = new Sequelize({
  username: env.username,
  port: env.mysqlport,
  password: env.password,
  database: env.database,
  host: env.mysqlhost,
  dialect: env.dialect,
});

export default sequelize;
