import { Controller, Get } from "@nestjs/common";
// A controller can be used to hold a set of APIs
@Controller("/app")
export class AppController {
  @Get("/hi")
  getRootRoute() {
    return "Hi there!";
  }

  @Get("/bye")
  getByeThere() {
    return "bye there";
  }
}
