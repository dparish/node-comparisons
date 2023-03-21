import {ObjectLiteral, Repository} from "typeorm";

export class EntityService<T extends ObjectLiteral> {
  constructor(private repository: Repository<T>) {}

  findAll(): Promise<T[]> {
    return this.repository.find();
  }

  create(entity: T): Promise<T> {
    return this.repository.save(entity);
  }
}
