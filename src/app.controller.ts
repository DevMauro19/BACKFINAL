import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { HealthStatus } from './interfaces/health-status.interface';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    return this.appService.getHello();
  }

  @Get('health')
  getHealthStatus(): HealthStatus {
    return this.appService.getHealthStatus();
  }
}
