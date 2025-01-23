import { Injectable } from '@nestjs/common';
import { AbstractAttorneysRepository } from '../domain/models/repositories/attorneys.repository';
import { AttorneyMapper } from '../domain/mappers/attorney.mapper';
import { AttorneyrResponseDto } from '../domain/dtos/response/attorney-response.dto';

@Injectable()
export class GetAttorneyByOabService {
  constructor(
    private readonly attorneyRepository: AbstractAttorneysRepository,
  ) {}

  public async execute(oabCode: string): Promise<AttorneyrResponseDto> {
    const attorney = await this.attorneyRepository.findByOab(oabCode);

    return AttorneyMapper.fromAttorneyToAttorneyResponseDto(attorney);
  }
}
