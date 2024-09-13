import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostoSaudeModule } from './postoSaude/postoSaude.module';
import { LoginModule } from './Login/login.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';


@Module({
  imports: [
    MongooseModule.forRoot(process.env.DB_POSTO),
    MongooseModule.forRoot(process.env.DB_LOGIN),
    PostoSaudeModule, LoginModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

