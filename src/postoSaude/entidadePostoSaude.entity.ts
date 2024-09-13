import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Document } from 'mongoose';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';


@Schema()

export class Posto_Saude extends Document {


    @Prop()
    id: number;

    @Prop()
    Local: string;

    @Prop()
    Cep: string;

    @Prop()
    Bairro: string;

    @Prop()
    Numero: number;


}


export const postoSchema = SchemaFactory.createForClass(Posto_Saude)