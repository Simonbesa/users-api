import { Controller, Get } from '@nestjs/common';
import { HealthOutput } from './dto/HealthOutput.dto';
import { HealthService } from './health.service';

@Controller('health')
export class HealthController {
  constructor(private readonly healthService: HealthService) {}

  @Get()
  public getHealth(): HealthOutput {
    return this.healthService.getHealth();
  }
}
