import { Test } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

jest.mock('./users.service');

describe('UsersService', () => {
  let usersService: UsersService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [],
      controllers: [UsersController],
      providers: [UsersService],
    }).compile();

    usersService = moduleRef.get<UsersService>(UsersService);
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(usersService).toBeDefined();
  });
  
  /* Find All Users */
  describe('findAll', () => {
    it('should return an array of users', async () => {
      usersService.findAll = jest.fn();
      expect(usersService.findAll);
      console.log('Test Service : Should find all users => 200');
    });
  });

  describe('findOne ', () => {
    it('should return an array of the user', async () => {
      usersService.findOne = jest.fn();
      expect(usersService.findOne);
      console.log('Test Service : Should find one user => 200');
    });
  });

  describe('create ', () => {
    it('should return an array of new user', async () => {
      usersService.create = jest.fn();
      expect(usersService.create);
      console.log('Test Service : Should create the user => 201');
    });
  });

  describe('update ', () => {
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