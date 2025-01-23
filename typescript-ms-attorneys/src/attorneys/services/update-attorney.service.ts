import { Injectable } from '@nestjs/common';
import { AbstractAttorneysRepository } from '../domain/models/repositories/attorneys.repository';

@Injectable()
export class UpdateAttorneyService {
  constructor(
    private readonly attorneyRepository: AbstractAttorneysRepository,
  ) {}

  public async execute(id: string, newPassword: string) {
    await this.attorneyRepository.updatePassword(id, newPassword);
  }
}
