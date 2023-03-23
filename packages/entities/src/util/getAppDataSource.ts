import { DataSource } from "typeorm";
import {Author} from "../entity/Author";

export function getAppDataSource(
  database: string,
  username: string,
  password: string | undefined,
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
    synchronize: false,
    logging: false,
    entities: [Author],
    migrations: [],
    subscribers: [],
  });
}
