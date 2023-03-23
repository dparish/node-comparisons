import {Author, SubjectwellNamingStrategy} from "entities";
import {DataSource} from "typeorm";
import 'reflect-metadata';
export const datasource: DataSource = new DataSource({
  type: "mysql",
  host: '127.0.0.1',
  port: 3306,
  database: 'books',
  username: 'root',
  synchronize: false,
  logging: false,
  entities: [Author],
  migrations: [],
  subscribers: [],
  namingStrategy: new SubjectwellNamingStrategy()
});
