import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

// bootstrap is a conventionally named function which is used to set up the server
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app.listen(3000);
}

bootstrap();
