import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthorService } from '../services/author.service';
import { Author } from 'entities';

@Controller('/authors')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}
  @Get()
  all() {
    return this.authorService.findAll();
  }

  @Post()
  create(@Body() author: Author) {
    return this.authorService.create(author);
  }
}
