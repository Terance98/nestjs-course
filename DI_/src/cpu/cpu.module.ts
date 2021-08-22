import { Module } from '@nestjs/common';
import { CpuService } from './cpu.service';
import { PowerModule } from 'src/power/power.module';

@Module({
  exports: [CpuService],
  imports: [PowerModule],
  providers: [CpuService],
})
export class CpuModule {}
