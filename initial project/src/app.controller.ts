import { Controller, Get } from '@nestjs/common';

@Controller('/app')
export class AppController {
  @Get('/ahoy')
  getRootRoute() {
    return 'Ahoy Sailor o/';
  }

  @Get('/see-ya')
  getSeeYaRoute() {
    return 'See ya later!';
  }
}
