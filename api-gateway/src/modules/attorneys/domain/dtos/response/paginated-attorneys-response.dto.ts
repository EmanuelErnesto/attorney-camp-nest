import { IAttorney } from '../../models/entities/attorneys.interface';

export interface PaginatedAttorneysResponseDto {
  attorneys: IAttorney[];
  page: number;
  size: number;
  skip: string;
}
