import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  root() {
    return {
      service: 'nestjs-devtron-demo',
      message: 'hello from the Devtron test app',
    };
  }

  @Get('health')
  health() {
    return { status: 'ok' };
  }
}
