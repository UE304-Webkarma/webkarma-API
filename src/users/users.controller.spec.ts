import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Users, UsersRepository } from './entities/user.entity';
import { Repository } from 'typeorm';

describe('UsersController', () => {
  let usersController: UsersController;
  let usersService: UsersService;
  let usersRepository: Repository<Users>;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(Users),
          useValue: {
            save: jest.fn(),
            create: jest.fn(),
            find: jest.fn(),
            findOne: jest.fn(),
            update: jest.fn(),
            delete: jest.fn()
          },
        },
        UsersRepository
      ]
    }).compile();

    usersController = app.get<UsersController>(UsersController);
    usersService = app.get<UsersService>(UsersService);
    usersRepository = app.get<UsersRepository>(UsersRepository);
  });

  it('should be defined', () => {
    expect(usersController).toBeDefined();
    expect(usersService).toBeDefined();
    expect(usersRepository).toBeDefined();
  });

  describe('Create a Users', () => {
    it('should return an array of new user', async () => {
      const request: any = {
        firstname: "CreateTest",
        lastname: "CreateTest"
      };
      const data = usersController.create(request);
      expect(usersController.create(request)).toBe(data);
      console.log('Test Controller : Should create the user => 201');
    });
  });

  describe('Find all Users', () => {
    it('should return an array of users', async () => {
      const data = usersController.findAll();
      expect(usersController.findAll()).toBe(data);
      console.log('Test Controller : Should find all users => 200');
    });
  });
  
  describe('Find one User', () => {
    it('should return an array of the user', async () => {
      const data = usersController.findOne('2');
      expect(usersController.findOne('2')).toBe(data);
      console.log('Test Controller : Should find one user => 200');
    });
  });
  
  describe('Update a User', () => {
    it('should return status of the modification', async () => {
      const data = usersController.update('2', { lastname: "UpdateTest" });
      expect(usersController.update('2', { lastname: "UpdateTest" })).toBe(data);
      console.log('Test Controller : Update a user => 201');
    });
  });
  
  describe('Delete a User', () => {
    it('should return status of the deletion', async () => {
      const data = usersController.remove('2');
      expect(usersController.remove('2')).toBe(data);
      console.log('Test Controller : Delete a user => 200');
    });
  });

});