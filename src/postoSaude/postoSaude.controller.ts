import { Controller, Get, Post, Patch, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { PostoService } from './postoSaude.service';
import { Posto_Saude } from './entidadePostoSaude.entity'
import { AuthGuard } from '../auth.guard';

@Controller('posto')
export class PostoSaudeController {
    constructor(private readonly appService: PostoService) { }

    @UseGuards(AuthGuard)
    @Post()
    create(@Body() posto: Posto_Saude): Promise<Posto_Saude> {
        return this.appService.create(posto);
    }


    @UseGuards(AuthGuard)
    @Get()
    findAll(): Promise<Posto_Saude[]> {
        return this.appService.findAll();
    }


    @UseGuards(AuthGuard)
    @Get(":id")
    findOne(@Param("id") id: string): Promise<Posto_Saude> {
        return this.appService.findOne(id);
    }


    @UseGuards(AuthGuard)
    @Put(":id")
    update(@Param("id") id: string, @Body() posto: Posto_Saude):
        Promise<Posto_Saude> {
        return this.appService.update(id, posto);
    }



    @UseGuards(AuthGuard)
    @Delete(":id")
    delete(@Param("id") id: string): Promise<void> {
        return this.appService.delete(id);
    }





}
