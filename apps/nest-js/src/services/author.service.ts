import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Author, EntityService} from "entities";
import {Repository} from "typeorm";

@Injectable()
export class AuthorService extends EntityService<Author>{
  constructor(
    @InjectRepository(Author)
    authorRepository: Repository<Author>
  ) {
    super(authorRepository)
  }
}
