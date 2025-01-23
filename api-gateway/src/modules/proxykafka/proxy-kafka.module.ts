import { Module } from '@nestjs/common';
import { ClientProxyUtils } from './client-proxy';

@Module({
  imports: [],
  providers: [ClientProxyUtils],
  exports: [ClientProxyUtils],
})
export class ProxyKafkaModule {}
