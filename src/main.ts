import * as logger from 'morgan';
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import config from './config';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  app.use(logger('dev'));
  await app.listen(config.port || 3000);
}

if (isNaN(parseInt(process.env.PORT))) {
  console.error('No port provided.');
  process.exit(1);
}

bootstrap().catch(console.error);
