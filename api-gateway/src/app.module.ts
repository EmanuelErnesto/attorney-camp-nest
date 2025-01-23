import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { AttorneysModule } from './modules/attorneys/attorneys.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        KAFKA_PORT: Joi.number().integer().positive().required(),
        KAFKA_BROKER_HOST: Joi.string().required(),
      }),
    }),
    AttorneysModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
