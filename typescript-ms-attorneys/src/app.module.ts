import { Module } from '@nestjs/common';
import { AppModuleImportsProvider } from './providers/app-module-imports.provider';

@Module({
  imports: [...AppModuleImportsProvider],
  controllers: [],
  providers: [],
})
export class AppModule {}
