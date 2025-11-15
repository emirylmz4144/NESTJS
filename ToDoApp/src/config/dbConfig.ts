import path from "path";
import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions.js";

export default (): MysqlConnectionOptions => ({
    type: process.env.DB_TYPE as 'mysql' | 'mariadb' ,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [path.resolve(__dirname, '..') + '/**/*.entity{.ts,.js}'],
    synchronize: process.env.DB_SYNCHRONIZE === 'true',
})