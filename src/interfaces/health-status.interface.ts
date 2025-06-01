// src/interfaces/health-status.interface.ts
export interface HealthStatus {
  status: string;
  message: string;
  services: {
    users: string;
    makeup: string;
    productTests: string;
    ordersTransactions: string;
  };
  timestamp: string;
}
