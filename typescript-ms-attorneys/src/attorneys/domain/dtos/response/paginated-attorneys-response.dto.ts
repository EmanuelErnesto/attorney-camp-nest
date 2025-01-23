import { AttorneyrResponseDto } from './attorney-response.dto';

export type PaginatedAttorneysResponseDtoProps = {
  attorneys?: AttorneyrResponseDto[];
  page?: number;
  take?: number;
  skip?: number;
  total?: number;
};

export class PaginatedAttorneysResponseDto {
  attorneys: AttorneyrResponseDto[];
  page: number;
  take: number;
  skip: number;
  total: number;

  constructor(data: PaginatedAttorneysResponseDtoProps) {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    (this.attorneys = data.attorneys),
      (this.page = data.page),
      (this.take = data.take),
      (this.skip = data.skip),
      (this.total = data.total);
  }
}
