import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { KafkaClientIds } from './common/consts/kafka-clientIds.const';
import { ConfigService } from '@nestjs/config';
import { KafkaConsumers } from './common/consts/kafka-consumers.const';

async function bootstrap() {
  const configService = new ConfigService();
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.KAFKA,
      options: {
        client: {
          clientId: KafkaClientIds.ATTORNEY,
          brokers: [
            `${configService.getOrThrow<string>('KAFKA_BROKER_HOST')}:${configService.getOrThrow<number>('KAFKA_PORT')}`,
          ],
        },
        consumer: {
          groupId: KafkaConsumers.ATTORNEY_CONSUMER,
          retry: {
            retries: 5,
          },
        },
      },
    },
  );
  await app.listen();
}
bootstrap();
