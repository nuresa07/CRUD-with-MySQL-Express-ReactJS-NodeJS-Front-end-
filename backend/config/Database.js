import { Sequelize } from "sequelize";

const db = new Sequelize('auth', 'root', '', {
  host: 'localhost',
  dialect: "mysql"
})

export default db;
