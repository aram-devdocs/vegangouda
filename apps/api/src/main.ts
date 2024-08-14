import Fastify from 'fastify';
import { app } from './app/app';
const host = process.env.HOST ?? '0.0.0.0';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

// Instantiate Fastify with some config
const server = Fastify({
  logger: true,
});

// Register your application as a normal plugin.
server.register(app);

// Start listening.
server.listen({ port, host }, (err) => {
  if (err) {
    server.log.error(err);
    process.exit(1);
  } else {
    console.log(`[ ready ] http://${host}:${port}`);
  }
});

// close on SIGINT

process.on('SIGINT', async () => {
  await server.close();
  process.exit(0);
});

// close on SIGTERM

process.on('SIGTERM', async () => {
  await server.close();
  process.exit(0);
});

// close on uncaughtException

process.on('uncaughtException', async () => {
  await server.close();
  process.exit(1);
});

// close on unhandledRejection

process.on('unhandledRejection', async () => {
  await server.close();
  process.exit(1);
});
