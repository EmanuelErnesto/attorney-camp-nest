import { BadRequestException, Injectable } from '@nestjs/common';
import { AttorneysProxy } from '../proxies/attorneys.proxy';
import { CreateAttorneyDto } from '../domain/dtos/request/create-attorney.dto';
import { AttorneyExceptionMessages } from 'src/common/consts/attorney-exception-messages.const';

@Injectable()
export class CreateAttorneyService {
  constructor(private readonly attorneyProxy: AttorneysProxy) {}

  public async execute(data: CreateAttorneyDto) {
    const attorneyEmailAlreadyExists =
      await this.attorneyProxy.getAttorneyByEmail(data.email);

    if (attorneyEmailAlreadyExists) {
      throw new BadRequestException(
        AttorneyExceptionMessages.EMAIL_ALREADY_EXISTS,
      );
    }

    const attorneyOabAlreadyExists = await this.attorneyProxy.getAttorneyByOab(
      data.oabCode,
    );

    const attorneyOabAlreadyUsed: boolean =
      data.oabCode === attorneyOabAlreadyExists.oabCode;

    if (attorneyOabAlreadyUsed) {
      throw new BadRequestException(
        AttorneyExceptionMessages.OABCODE_ALREADY_USED,
      );
    }

    await this.attorneyProxy.create(data);
  }
}
