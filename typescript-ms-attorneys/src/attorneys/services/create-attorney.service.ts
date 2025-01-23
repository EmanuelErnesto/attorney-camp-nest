import { Injectable, Logger } from '@nestjs/common';
import { AbstractAttorneysRepository } from '../domain/models/repositories/attorneys.repository';
import { CreateAttorneyDto } from '../domain/dtos/request/create-attorney.dto';

@Injectable()
export class CreateAttorneyService {
  private logger: Logger = new Logger(CreateAttorneyService.name);
  constructor(
    private readonly attorneyRepository: AbstractAttorneysRepository,
  ) {}

  public async execute(createAttorneyDto: CreateAttorneyDto): Promise<void> {
    const attorney = await this.attorneyRepository.create(createAttorneyDto);

    this.logger.log(`Created attorney: ${attorney}`);
  }
}
