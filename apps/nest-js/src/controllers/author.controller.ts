import {Controller, Get} from "@nestjs/common";
import {AuthorService} from "../services/author.service";

@Controller('/authors')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {
  }
  @Get()
  all() {
    return this.authorService.findAll();
  }
}
