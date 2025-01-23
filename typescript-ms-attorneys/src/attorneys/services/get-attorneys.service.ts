import { Injectable } from '@nestjs/common';
import { AbstractAttorneysRepository } from '../domain/models/repositories/attorneys.repository';

import { PaginationParamsDto } from '../domain/dtos/request/pagination-params.dto';
import { PaginatedAttorneysResponseDto } from '../domain/dtos/response/paginated-attorneys-response.dto';

@Injectable()
export class GetAttorneysService {
  constructor(
    private readonly attorneyRepository: AbstractAttorneysRepository,
  ) {}

  public async execute(
    params: PaginationParamsDto,
  ): Promise<PaginatedAttorneysResponseDto> {
    return await this.attorneyRepository.findAll(params);
  }
}
