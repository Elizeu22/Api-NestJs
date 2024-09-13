import { Controller, Get, Post, Patch, Put, Delete, Body, Param, UseGuards,HttpStatus,RawBodyRequest,Req,Headers,Res,Query} from '@nestjs/common';
import { LoginService } from './login.service';
import { loginUsuario } from './login.entity'
import { AuthService } from '../auth.service';
import { AuthGuard } from 'src/auth.guard';
import { Request } from 'express';
import { model } from 'mongoose';




@Controller('login')
export class loginController {
    constructor(private readonly loginService: LoginService) { }

    @Post()
    create(@Body() login: loginUsuario): Promise<loginUsuario> {
        return this.loginService.create(login);
    }



    @Get(":password")
    findUser(@Param("password") password:string,@Req() headers:RawBodyRequest<Request>){
        

        const teste = this.loginService.findUser(password);


        return teste;      

    }


    @Get()
    findAll(): Promise<loginUsuario[]> {
        return this.loginService.findAll();
    }


    @Get(":id")
    findOne(@Param("id") id: number): Promise<loginUsuario> {
        return this.loginService.findOne(id);
    }

    @Put(":id")
    update(@Param("id") id: number, @Body() login: loginUsuario):
        Promise<loginUsuario> {
        return this.loginService.update(id, login);
    }


    @Delete(":id")
    delete(@Param("id") id: number): Promise<void> {
        return this.loginService.delete(id);
    }





}
