import { Injectable } from '@nestjs/common';
import { HealthOutput } from './dto/HealthOutput.dto';

@Injectable()
export class HealthService {
  public getHealth(): HealthOutput {
    return {
      environment: process.env.NODE_ENV || 'local',
      message: 'users-api is up and running',
    };
  }
}
