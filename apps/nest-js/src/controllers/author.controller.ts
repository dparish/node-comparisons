import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthorService } from '../services/author.service';
import { Author } from 'entities';

export type AllResponse = Promise<Author[]>;
export type CreateRequest = Author;
export type CreateResponse = Promise<Author>;
@Controller('/authors')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}
  @Get()
  all(): AllResponse {
    return this.authorService.findAll();
  }

  @Post()
  create(@Body() author: CreateRequest): CreateResponse {
    return this.authorService.create(author);
  }
}
