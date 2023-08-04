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
  logging: false, // 배포 환경에서는 쿼리 로그를 비활성화 한다.
});

export default sequelize;
