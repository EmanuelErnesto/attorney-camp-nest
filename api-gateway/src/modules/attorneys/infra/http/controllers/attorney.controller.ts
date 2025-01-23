import { Body, Controller, Post } from '@nestjs/common';
import { CreateAttorneyService } from 'src/modules/attorneys/services/create-attorney.service';
import { CreateAttorneyRecipe } from '../recipes/create-attorney.recipe';

@Controller('/attorneys')
export class AttorneyController {
  constructor(private readonly createAttorneyService: CreateAttorneyService) {}

  @Post()
  public async execute(@Body() data: CreateAttorneyRecipe) {
    await this.createAttorneyService.execute(data);
  }
}
