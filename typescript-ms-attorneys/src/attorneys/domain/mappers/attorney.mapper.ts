import { Attorney } from 'src/attorneys/infra/typeorm/entities/attorney.entity';
import { AttorneyrResponseDto } from '../dtos/response/attorney-response.dto';
import { IAttorney } from '../models/entities/attorneys.interface';
import {
  PaginatedAttorneysResponseDto,
  PaginatedAttorneysResponseDtoProps,
} from '../dtos/response/paginated-attorneys-response.dto';

export class AttorneyMapper {
  public static fromAttorneyToAttorneyResponseDto(
    attorney: IAttorney,
  ): AttorneyrResponseDto {
    return new AttorneyrResponseDto({
      id: attorney.id,
      name: attorney.name,
      email: attorney.email,
      oabCode: attorney.oabCode,
      createdAt: attorney.createdAt,
      updatedAt: attorney.updatedAt,
    });
  }

  public static fromAttorneyListToPaginatedAttorneyDto(
    attorneys: Attorney[],
    { skip, take, total }: PaginatedAttorneysResponseDtoProps,
  ) {
    const attorneysPaginated = attorneys.map((attorney) => {
      return new AttorneyrResponseDto({
        id: attorney.id,
        name: attorney.name,
        email: attorney.email,
        oabCode: attorney.oabCode,
        createdAt: attorney.createdAt,
        updatedAt: attorney.updatedAt,
      });
    });

    return new PaginatedAttorneysResponseDto({
      attorneys: attorneysPaginated,
      total,
      skip,
      take,
      page: skip - take,
    });
  }
}
