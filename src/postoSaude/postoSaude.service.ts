import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Posto_Saude } from './entidadePostoSaude.entity';
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose';


@Injectable()
export class PostoService {

    constructor(@InjectModel(Posto_Saude.name) private postoSaudeRepository: Model<Posto_Saude>,
    ) { }

    async findAll(): Promise<Posto_Saude[]> {
        let result = await this.postoSaudeRepository.find();

        return result;
    }

    async findOne(id: string): Promise<Posto_Saude> {
        let result = await this.postoSaudeRepository.findById(id);

        return result;
    }

    async create(posto: Posto_Saude): Promise<Posto_Saude> {
        let result = await this.postoSaudeRepository.create(posto);

        return result;
    }

    async update(id: string, posto: Posto_Saude): Promise<Posto_Saude> {
        await this.postoSaudeRepository.findByIdAndUpdate(id, posto);
        return this.postoSaudeRepository.findById(id);
    }


    async delete(id: string): Promise<void> {
        await this.postoSaudeRepository.findByIdAndDelete(id);
    }







}
