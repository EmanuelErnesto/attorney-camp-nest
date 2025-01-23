import { Injectable } from '@nestjs/common';
import { ClientKafkaProxy } from '@nestjs/microservices';
import { ClientProxyUtils } from 'src/modules/proxykafka/client-proxy';
import { CreateAttorneyDto } from '../domain/dtos/request/create-attorney.dto';
import { PaginationParamsDto } from '../domain/dtos/request/pagination-params.dto';
import { PaginatedAttorneysResponseDto } from '../domain/dtos/response/paginated-attorneys-response.dto';
import { lastValueFrom } from 'rxjs';
import { AttorneyrResponseDto } from '../domain/dtos/response/attorney-response.dto';
import { UpdateAttorneyPasswordDto } from '../domain/dtos/request/update-attorney-password.dto';

@Injectable()
export class AttorneysProxy {
  private readonly clientProxyAttorneys: ClientKafkaProxy;
  constructor(clientProxyInstanceUtils: ClientProxyUtils) {
    this.clientProxyAttorneys =
      clientProxyInstanceUtils.getAttorneyProxyInstance();
  }

  public async create(createAttorneyDto: CreateAttorneyDto) {
    await this.clientProxyAttorneys.emit('create-attorney', createAttorneyDto);
  }

  public async getAttorneys(
    searchParams: PaginationParamsDto,
  ): Promise<PaginatedAttorneysResponseDto> {
    return await lastValueFrom(
      this.clientProxyAttorneys.send('get-attorneys-paginated', searchParams),
    );
  }

  public async getAttorneyById(id: string): Promise<AttorneyrResponseDto> {
    return await lastValueFrom(
      this.clientProxyAttorneys.send('get-attorney-by-id', id),
    );
  }

  public async getAttorneyByEmail(
    email: string,
  ): Promise<AttorneyrResponseDto> {
    return await lastValueFrom(
      this.clientProxyAttorneys.send('get-attorney-by-email', email),
    );
  }

  public async getAttorneyByOab(oab: string): Promise<AttorneyrResponseDto> {
    return await lastValueFrom(
      this.clientProxyAttorneys.send('get-attorney-by-oab', oab),
    );
  }

  public async deleteAttorney(id: string): Promise<void> {
    await this.clientProxyAttorneys.emit('delete-attorney', id);
  }

  public async updateAttorneyPassword({
    id,
    oldPassword,
    newPassword,
    passwordConfirmation,
  }: UpdateAttorneyPasswordDto) {
    await this.clientProxyAttorneys.emit('update-attorney-password', {
      id,
      attorneyData: { oldPassword, newPassword, passwordConfirmation },
    });
  }
}
