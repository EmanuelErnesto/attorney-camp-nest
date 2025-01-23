import { Injectable } from '@nestjs/common';
import { AbstractAttorneysRepository } from '../domain/models/repositories/attorneys.repository';
import { AttorneyMapper } from '../domain/mappers/attorney.mapper';
import { AttorneyrResponseDto } from '../domain/dtos/response/attorney-response.dto';

@Injectable()
export class GetAttorneyByEmailService {
  constructor(
    private readonly attorneyRepository: AbstractAttorneysRepository,
  ) {}

  public async execute(email: string): Promise<AttorneyrResponseDto> {
    const attorney = await this.attorneyRepository.findByEmail(email);

    return AttorneyMapper.fromAttorneyToAttorneyResponseDto(attorney);
  }
}
