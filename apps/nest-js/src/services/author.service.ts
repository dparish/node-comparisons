import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Author} from "entities";
import {Repository} from "typeorm";

@Injectable()
export class AuthorService {
  constructor(
    @InjectRepository(Author)
    private authorRepository: Repository<Author>
  ) {}

  findAll(): Promise<Author[]> {
    return this.authorRepository.find();
  }
}
