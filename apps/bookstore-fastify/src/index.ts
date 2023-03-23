import app from "./app";
import {datasource} from "./datasource";

const FASTIFY_PORT = Number(process.env.FASTIFY_PORT) || 3000;

app.listen({ port: FASTIFY_PORT });

datasource.initialize().catch((err) => console.log(err));
console.log(`🚀  Fastify server running on port ${FASTIFY_PORT}`);
console.log(`Route index: /`);
console.log(`Route user: /api/v1/user`);
