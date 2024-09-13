import { Test, TestingModule } from '@nestjs/testing';
import { PostoService } from './postoSaude.service';
import { AuthService } from '../auth.service';
import { userPostoSaudemock } from './postoSaude..service.mock'
import { JwtModule } from '@nestjs/jwt';


describe('postoServicer', () => {
    let postoServicer: PostoService;

    beforeAll(async () => {

        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [JwtModule],
            providers: [userPostoSaudemock, AuthService]
        }).compile();

        postoServicer = moduleFixture.get<PostoService>(PostoService);
    });


    it('Should findOne', async () => {
        const id: string = "66d9b6c17c0b09ec28f39812";

        postoServicer.findOne = jest.fn().mockReturnValueOnce({ id, Local: "Sao Paulo", Cep: "06215890", Bairro: "Paraiso", Numero: 20 });

        const result = await postoServicer.findOne(id);

        expect(result.id).toEqual(id);


    });


    it('Should findAll', async () => {
        const id: string = "66d9b6c17c0b09ec28f39812";

        const servi = [{ id, Local: "Sao Paulo", Cep: "06215890", Bairro: "Paraiso", Numero: 20 }]

        postoServicer.findAll = jest.fn().mockReturnValueOnce(servi);

        const result = await postoServicer.findAll();

        expect(result.length).toEqual(servi.length);
        expect(result[0].id).toEqual(id);


    });



    it('Should create', async () => {

        const posto = {
            Local: "Sao Paulo",
            Cep: "06215890",
            Bairro: "Paraiso",
            Numero: 20
        } as any;

        const id: string = "66d9b6c17c0b09ec28f39812";


        postoServicer.create = jest.fn().mockReturnValueOnce({ id, ...posto });

        const result = await postoServicer.create(posto);

        expect(result.id).toEqual(id);



    });




    it('Should update', async () => {

        const posto = {
            Local: "Taboao da Serra",
        } as any;

        const id: string = "66d9b6c17c0b09ec28f39812";


        postoServicer.update = jest.fn().mockReturnValueOnce({ id, ...posto });

        const result = await postoServicer.update(id, posto);

        expect(result.id).toEqual(id);



    });




    it('Should delete', async () => {
        const id: string = "66d9b6c17c0b09ec28f39812";

        postoServicer.findOne = jest.fn().mockReturnValueOnce({ id, Local: "Sao Paulo", Cep: "06215890", Bairro: "Paraiso", Numero: 20 });

        const result = await postoServicer.delete(id);

        expect(result).toBeTruthy();


    });
});


