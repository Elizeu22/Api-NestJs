import { Controller, Get,Post,Patch,Put,Delete,Body,Param } from '@nestjs/common';
import { AppService,postoSaude } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
 
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }


}
