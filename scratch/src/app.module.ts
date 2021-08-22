import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
// A module is a set of controllers that is actually exported as a server logic
@Module({
  controllers: [AppController],
})
export class AppModule {}
