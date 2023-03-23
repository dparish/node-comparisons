import {FastifyInstance, FastifyReply, FastifyRequest} from "fastify";
import {Author, EntityService} from "entities";
import {datasource} from "../datasource";

export async function authorsController(fastify: FastifyInstance) {
  fastify.get('/', async (_request: FastifyRequest, _reply: FastifyReply) => {
    return getAuthorService().findAll();
  })

  fastify.post('/', async(request: FastifyRequest, _reply: FastifyReply) => {
    return getAuthorService().create(request.body as Author)
  });
}

function getAuthorService() {
  return new EntityService<Author>(datasource.getRepository(Author));
}
