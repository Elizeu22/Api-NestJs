import { PostoService } from './postoSaude.service';
import {postoSchema} from './entidadePostoSaude.entity'
import { postoSaude } from 'src/app.service';

export const postoSaudeMock = {
    id: "66d9b6c17c0b09ec28f39812",
    Local: "Sao Paulo",
	Cep: "06813150",
	Bairro: "Embu",
	Numero: 1250
} as any;

export const userPostoSaudemock = {
    provide: PostoService,
    useValue:{
        findAll: jest.fn().mockResolvedValue([postoSaudeMock]),
        findOne: jest.fn().mockResolvedValue(postoSaudeMock),
        create: jest.fn().mockResolvedValue(postoSaudeMock),
        update: jest.fn().mockResolvedValue(postoSaudeMock),
        delete: jest.fn().mockResolvedValue(postoSaudeMock),
    }
}