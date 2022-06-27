import { Controller, Get } from "@nestjs/common";

@Controller("/nestjs")
export class AppController {
  @Get("/hello")
  getRootRoute() {
    return "Hello World!!";
  }
  @Get("/bye")
  getBye() {
    return "GoodBye!!!";
  }
}
