import { FastifyInstance } from "fastify";
import indexController from "./controller/indexController";
import {authorsController} from "./controller/authorsController";

export default async function router(fastify: FastifyInstance) {
  fastify.register(indexController, { prefix: "/" });
  fastify.register(authorsController, { prefix: "/authors" });
}
