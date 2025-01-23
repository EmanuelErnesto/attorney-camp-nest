import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  ClientKafkaProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';
import { KafkaClientIds } from 'src/common/consts/kafka-clients.const';
import { KafkaConsumers } from 'src/common/consts/kafka-consumers.const';

@Injectable()
export class ClientProxyUtils {
  constructor(private readonly configService: ConfigService) {}

  getAttorneyProxyInstance(): ClientKafkaProxy {
    return ClientProxyFactory.create({
      transport: Transport.KAFKA,
      options: {
        client: {
          clientId: KafkaClientIds.ATTORNEY,
          brokers: [
            `${this.configService.getOrThrow<string>('KAFKA_BROKER_HOST')}:${this.configService.getOrThrow<number>('KAFKA_PORT')}`,
          ],
        },
        consumer: {
          groupId: KafkaConsumers.ATTORNEY_CONSUMER,
          retry: { retries: 5 },
        },
      },
    });
  }
}
