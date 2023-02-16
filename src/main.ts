import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  SwaggerModule,
  DocumentBuilder,
} from '@nestjs/swagger';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(helmet());

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('Yellow Submarine')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('Auth')
    .addTag('Users')
    .addTag('Journee')
    .addTag('Semaine')
    .addTag('Bi-semaine')
    .addTag('Tri-semaine')
    .addTag('Mois')
    .addTag('Annee')
    .addTag('Entreprise')
    .addTag('Infractions')
    .addTag('Chronomode')

    .build();
  const document = SwaggerModule.createDocument(
    app,
    config,
  );
  SwaggerModule.setup('api', app, document);
  await app.listen(3002);
}
bootstrap();
