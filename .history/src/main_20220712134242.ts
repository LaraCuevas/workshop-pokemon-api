import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const host = process.env.host || 'localhost';
  const port = process.env.PORT || 3001;
  await app.listen(port, host);
}
bootstrap();
