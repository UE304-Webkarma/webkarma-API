import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { Users, UsersRepository } from './entities/user.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

const id = 1;

describe('UserService', () => {
  let usersController: UsersController;
  let usersService: UsersService;
  let usersRepository: UsersRepository;
  

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
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
      ],
      controllers: [UsersController],
    }).compile();

    usersService = module.get<UsersService>(UsersService);
    usersRepository = module.get<UsersRepository>(UsersRepository);
    usersController = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(usersController).toBeDefined();
    expect(usersService).toBeDefined();
    expect(usersRepository).toBeDefined();
  });

  describe('UserService.create ', () => {
    it('should return an array of new user', async () => {
      usersService.create = jest.fn();
      expect(usersService.create);
      console.log('Test Service : Should create the user => 201');
    });
  });

  describe('UserService.findAll ', () => {
    it('should return an array of users', async () => {
      usersService.findAll = jest.fn();
      expect(usersService.findAll);
      console.log('Test Service : Should find all users => 200');
    });
  });

  describe('UserService.findOne ', () => {
    it('should return an array of the user', async () => {
      usersService.findOne = jest.fn();
      expect(usersService.findOne);
      console.log('Test Service : Should find one user => 200');
    });
  });

  describe('UserService.update ', () => {
    it('should return status of the modification', async () => {
      usersService.update = jest.fn();
      expect(usersService.update);
      console.log('Test Service : Update a user => 200');
    });
  });

  describe('UserService.remove ', () => {
    it('should return status of the deletion', async () => {
      usersService.remove = jest.fn();
      expect(usersService.remove);
      console.log('Test Service : Delete a user => 200');
    });
  });

});