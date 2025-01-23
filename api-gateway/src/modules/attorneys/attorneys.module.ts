import { Module } from '@nestjs/common';
import { ProxyKafkaModule } from '../proxykafka/proxy-kafka.module';

@Module({
  imports: [ProxyKafkaModule],
  controllers: [],
  providers: [],
})
export class AttorneysModule {}
