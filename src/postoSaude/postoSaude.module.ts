import { Module } from '@nestjs/common';
import { PostoSaudeController } from './postoSaude.controller';
import { PostoService } from './postoSaude.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Posto_Saude,postoSchema } from './entidadePostoSaude.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthService } from '../auth.service';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';

@Module({
    imports: [
        ConfigModule.forRoot(),
        JwtModule.register({
            secret: process.env.SECRET,
            signOptions: {
                expiresIn: parseInt(process.env.EXPIRES)
            }

        }),    
        MongooseModule.forFeature([{name: Posto_Saude.name,schema: postoSchema}])],
    controllers: [PostoSaudeController],
    providers: [PostoService,AuthService],
})
export class PostoSaudeModule { }
