import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as Joi from 'joi';
import { Attorney } from 'src/attorneys/infra/typeorm/entities/attorney.entity';

export const AppModuleImportsProvider = [
  ConfigModule.forRoot({
    isGlobal: true,
    validationSchema: Joi.object({
      KAFKA_PORT: Joi.number().integer().positive().required(),
      KAFKA_BROKER_HOST: Joi.string().required(),
    }),
  }),
  TypeOrmModule.forRootAsync({
    useFactory: (configService: ConfigService) => ({
      type: 'postgres',
      host: configService.getOrThrow<string>('DB_HOST'),
      port: configService.getOrThrow<number>('WEBSERVER_DB_PORT'),
      username: configService.getOrThrow<string>('DB_POSTGRES_USER'),
      password: configService.getOrThrow<string>('DB_POSTGRES_PASSWORD'),
      database: configService.getOrThrow<string>('DB_POSTGRES_NAME'),
      entities: [Attorney],
      synchronize: true,
    }),
    inject: [ConfigService],
  }),
];
