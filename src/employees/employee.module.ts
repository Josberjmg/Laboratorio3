import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';
import { EmployeeEntity } from './entities/employee.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [EmployeeController],
  providers: [EmployeeService],
  imports: [
      TypeOrmModule.forFeature([EmployeeEntity]),
    ]
})
export class EmployeeModule {}
