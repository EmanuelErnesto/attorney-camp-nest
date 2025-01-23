import { Injectable } from '@nestjs/common';
import { AbstractAttorneysRepository } from '../domain/models/repositories/attorneys.repository';
import { IAttorney } from '../domain/models/entities/attorneys.interface';

@Injectable()
export class DeleteAttorneyService {
  constructor(
    private readonly attorneyRepository: AbstractAttorneysRepository,
  ) {}

  public async execute(attorney: IAttorney): Promise<void> {
    await this.attorneyRepository.delete(attorney);
  }
}
