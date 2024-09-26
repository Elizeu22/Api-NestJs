import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';
import { loginUsuario } from './login.entity';
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose';
import { AuthService } from '../auth.service';


@Injectable()
export class LoginService {


    constructor(@InjectModel(loginUsuario.name) private loginRepository: Model<loginUsuario>,
        private readonly AuthService: AuthService) { }



    async findAll(): Promise<loginUsuario[]> {
        let result = await this.loginRepository.find();

        return result;
    }

    async findOne(id: number): Promise<loginUsuario> {
        let result = await this.loginRepository.findById(id);
        return result
    }



    async findUser(password: string): Promise<loginUsuario> {

        let result = await this.loginRepository.findOne({password})
        console.log(result)
        console.log(password)

        if (result != null) {

            const token = await this.AuthService.createToken(password);
            console.log(token)

        }
        return result;


    }

    async create(login: loginUsuario): Promise<loginUsuario> {
        let result = await this.loginRepository.create(login);

        return result;
    }





    async update(id: number, login: loginUsuario): Promise<loginUsuario> {
        await this.loginRepository.findByIdAndUpdate(id, login);
        return this.loginRepository.findById(id);
    }





    async delete(id: number): Promise<void> {
        await this.loginRepository.findByIdAndDelete(id);
    }







}
