import { Injectable } from '@nestjs/common';
import { AbstractAttorneysRepository } from 'src/attorneys/domain/models/repositories/attorneys.repository';
import { Repository } from 'typeorm';
import { Attorney } from '../entities/attorney.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateAttorneyDto } from 'src/attorneys/domain/dtos/request/create-attorney.dto';
import { IAttorney } from 'src/attorneys/domain/models/entities/attorneys.interface';
import { PaginationParamsDto } from 'src/attorneys/domain/dtos/request/pagination-params.dto';
import { PaginatedAttorneysResponseDto } from 'src/attorneys/domain/dtos/response/paginated-attorneys-response.dto';
import { AttorneyMapper } from 'src/attorneys/domain/mappers/attorney.mapper';

@Injectable()
export class AttorneysRepository extends AbstractAttorneysRepository {
  constructor(
    @InjectRepository(Attorney)
    private readonly attorneysRepository: Repository<Attorney>,
  ) {
    super();
  }

  public async create(data: CreateAttorneyDto): Promise<IAttorney> {
    const attorney = this.attorneysRepository.create(data);

    return await this.attorneysRepository.save(attorney);
  }

  public async findById(id: string): Promise<IAttorney | null> {
    return await this.attorneysRepository.findOneBy({ id });
  }

  public async findByEmail(email: string): Promise<IAttorney | null> {
    return await this.attorneysRepository.findOneBy({ email });
  }

  public async findByOab(oabCode: string): Promise<IAttorney | null> {
    return await this.attorneysRepository.findOneBy({ oabCode });
  }

  public async findAll(
    paginationParams: PaginationParamsDto,
  ): Promise<PaginatedAttorneysResponseDto> {
    const { take, skip } = paginationParams;

    const [attorneys, total] = await Promise.all([
      this.attorneysRepository.find({
        skip,
        take,
        transaction: true,
      }),
      this.attorneysRepository.count(),
    ]);

    return AttorneyMapper.fromAttorneyListToPaginatedAttorneyDto(attorneys, {
      total,
      take,
      skip,
    });
  }

  public async updatePassword(id: string, newPassword: string): Promise<void> {
    await this.attorneysRepository.update(id, { password: newPassword });
  }

  public async delete(attorney: IAttorney): Promise<void> {
    await this.attorneysRepository.delete(attorney);
  }
}
