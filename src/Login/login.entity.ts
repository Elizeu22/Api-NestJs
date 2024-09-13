import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Document } from 'mongoose';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { spec } from 'node:test/reporters';


@Schema()

export class loginUsuario extends Document {

    @Prop()
    Nome: string;

    @Prop()
    password?: string;



}


export const loginSchema = SchemaFactory.createForClass(loginUsuario)