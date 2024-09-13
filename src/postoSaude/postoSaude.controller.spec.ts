import { Test, TestingModule } from '@nestjs/testing';
import { PostoSaudeController } from './postoSaude.controller';
import { AuthService } from '../auth.service';
import { postoSaudeMock, userPostoSaudemock } from './postoSaude..service.mock'
import { JwtModule } from '@nestjs/jwt';


describe('PostoSaudeController', () => {
    let postoSaudeController: PostoSaudeController;

    beforeAll(async () => {

        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [JwtModule],
            controllers: [PostoSaudeController],
            providers: [userPostoSaudemock, AuthService]
        }).compile();

        postoSaudeController = moduleFixture.get<PostoSaudeController>(PostoSaudeController);
    });


    it('Should findOne', async () => {
        const result = await postoSaudeController.findOne(postoSaudeMock.id)
        expect(result.id).toEqual(postoSaudeMock.id);

    });


    it('Should create', async () => {
        const result = await postoSaudeController.create(postoSaudeMock[0])
        expect(result.id).toEqual(postoSaudeMock.id);
    });



    it('Should findAll', async () => {
        const result = await postoSaudeController.findAll()
        expect(result.length).toEqual(1);

    });


    it('Should delete users', async () => {
        const result = await postoSaudeController.delete(postoSaudeMock.id)
        expect(result).toBeTruthy();
    });


    it('Should update', async () => {
        const result = await postoSaudeController.update(postoSaudeMock.id, postoSaudeMock[postoSaudeMock.id])
        expect(result).toBeTruthy();
    });

});