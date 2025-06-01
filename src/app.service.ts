import { Injectable } from '@nestjs/common';
import { HealthStatus } from './interfaces/health-status.interface';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Bienvenido al backend 🛠️';
  }

  getHealthStatus(): HealthStatus {
    return {
      status: 'ok',
      message: 'Sistema funcionando correctamente',
      services: {
        users: 'activo',
        makeup: 'activo',
        productTests: 'activo',
        ordersTransactions: 'activo',
      },
      timestamp: new Date().toISOString(),
    };
  }
}
