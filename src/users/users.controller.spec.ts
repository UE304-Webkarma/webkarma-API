import { Test } from '@nestjs/testing';
import { Users } from './schemas/users.schema';
import { usersStub } from './stubs/users.stub';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

jest.mock('./users.service');

describe('UsersController', () => {
  let usersController: UsersController;
  let usersService: UsersService;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [],
      controllers: [UsersController],
      providers: [UsersService],
    }).compile();

    usersController = moduleRef.get<UsersController>(UsersController);
    usersService = moduleRef.get<UsersService>(UsersService);
    jest.clearAllMocks();
  });

  /* Find All Users */
  describe('findAll', () => {
    describe('When findAll is called', () => {
      let users: Users[];
      beforeEach(async () => {
        users = await usersController.findAll();
      });
      test('Then it should call usersService', () => {
        expect(usersService.findAll).toBeCalledWith();
      });
      test('Then it should return all user', () => {
        expect(users).toEqual([usersStub()]);
      });
    });
  });

  /* Find One User */
  describe('findOne', () => {
    describe('When findOne is called', () => {
      let user: Users;
      beforeEach(async () => {
        user = await usersController.findOne(usersStub().id);
      });
      test('Then it should call usersService', () => {
        expect(usersService.findOne).toBeCalledWith(usersStub().id);
      });
      test('Then it should return a user', () => {
        expect(user).toEqual(usersStub());
      });
    });
  });

  /* Create One User */
  describe('create', () => {
    describe('When create is called', () => {
      let user: Users;
      beforeEach(async () => {
        user = await usersController.create(usersStub());
      });
      test('Then it should call usersService', () => {
        expect(usersService.create).toHaveBeenCalledWith(usersStub());
      });
      test('Then it should return a user', () => {
        expect(user).toEqual(usersStub());
      });
    });
  });

  /* Update One User */
  describe('update', () => {
    describe('When update is called', () => {
      let user;
      beforeEach(async () => {
        user = await usersController.update(usersStub().id, usersStub());
      });
      test('Then it should call usersService', () => {
        expect(usersService.update).toHaveBeenCalledWith(usersStub().id, usersStub());
      });
      test('Then it should return a user', () => {
        expect(user).toEqual(usersStub());
      });
    });
  });

  /* Delete One User */
  describe('remove', () => {
    describe('When remove is called', () => {
      let user;
      beforeEach(async () => {
        user = await usersController.remove(usersStub().id);
      });
      test('Then it should call usersService', () => {
        expect(usersService.remove).toHaveBeenCalledWith(usersStub().id);
      });
      test('Then it should return a status', () => {
        expect(user).toEqual(usersStub());
      });
    });
  });
});
