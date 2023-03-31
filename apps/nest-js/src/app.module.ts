import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Author, SubjectwellNamingStrategy } from 'entities';
import { AuthorController } from './controllers/author.controller';
import { AuthorService } from './services/author.service';

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
      namingStrategy: new SubjectwellNamingStrategy(),
    }),
    TypeOrmModule.forFeature([Author]),
  ],
  controllers: [AuthorController],
  providers: [AuthorService],
})
export class AppModule {}
