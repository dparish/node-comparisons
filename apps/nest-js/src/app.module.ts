import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Author} from "entities";
import {AuthorController} from "./controllers/author.controller";
import {AuthorService} from "./services/author.service";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      database: 'books',
      entities: [Author],
      synchronize: false,
    }),
    TypeOrmModule.forFeature([Author])
  ],
  controllers: [AppController, AuthorController],
  providers: [AppService, AuthorService],
})
export class AppModule {}
