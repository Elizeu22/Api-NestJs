import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { loginUsuario, loginSchema } from './login.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { loginController } from './login.controller';
import { LoginService } from './login.service';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from '../auth.service';
import { AuthGuard } from 'src/auth.guard';


@Module({
    imports: [
        ConfigModule.forRoot(),
        JwtModule.register({
            secret: process.env.SECRET,
            signOptions: {
                expiresIn: parseInt(process.env.EXPIRES)
            }

        }),
        MongooseModule.forFeature([{ name: loginUsuario.name, schema: loginSchema }])],
    controllers: [loginController],
    providers: [LoginService,AuthService],
})
export class LoginModule { }
