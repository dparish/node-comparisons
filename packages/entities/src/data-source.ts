import "reflect-metadata";
import { DataSource } from "typeorm";
// import { User } from "./entity/User"

export const AppDataSource = getAppDataSource("test", "test", "test");

export function getAppDataSource(
  database: string,
  username: string,
  password: string,
  host = "localhost",
  port = 3306
): DataSource {
  return new DataSource({
    type: "mysql",
    host: host,
    port: port,
    database: database,
    username: username,
    password: password,
    synchronize: true,
    logging: false,
    entities: ["entity/*.js"],
    migrations: [],
    subscribers: [],
  });
}
