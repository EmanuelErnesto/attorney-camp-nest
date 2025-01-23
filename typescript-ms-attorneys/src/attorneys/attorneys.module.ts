import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Attorney } from './infra/typeorm/entities/attorney.entity';
import { AbstractAttorneysRepository } from './domain/models/repositories/attorneys.repository';
import { AttorneysRepository } from './infra/typeorm/repositories/attorneys.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Attorney])],
  controllers: [],
  providers: [
    { provide: AbstractAttorneysRepository, useClass: AttorneysRepository },
  ],
})
export class AttorneysModule {}
