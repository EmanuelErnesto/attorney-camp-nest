import { Injectable } from '@nestjs/common';
import { CreateAttorneyDto } from '../../dtos/request/create-attorney.dto';
import { PaginationParamsDto } from '../../dtos/request/pagination-params.dto';
import { PaginatedAttorneysResponseDto } from '../../dtos/response/paginated-attorneys-response.dto';
import { IAttorney } from '../entities/attorneys.interface';

@Injectable()
export abstract class AbstractAttorneysRepository {
  abstract create(data: CreateAttorneyDto): Promise<IAttorney>;
  abstract findAll(
    paginationParams: PaginationParamsDto,
  ): Promise<PaginatedAttorneysResponseDto>;
  abstract findById(id: string): Promise<IAttorney | null>;
  abstract findByEmail(email: string): Promise<IAttorney | null>;
  abstract findByOab(oabCode: string): Promise<IAttorney | null>;
  abstract updatePassword(id: string, newPassword: string): Promise<void>;
  abstract delete(attorney: IAttorney): Promise<void>;
}
