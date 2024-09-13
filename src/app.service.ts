import { Injectable, NotFoundException } from '@nestjs/common';

export type postoSaude = {
  idPosto: number,
  unidade: string,
  uf: string

}
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

}
