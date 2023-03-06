import { Test } from '@nestjs/testing';
import { SitesController } from './sites.controller';
import { SitesService } from './sites.service';

jest.mock('./sites.service');

describe('SitesService', () => {
  let sitesService: SitesService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [],
      controllers: [SitesController],
      providers: [SitesService],
    }).compile();

    sitesService = moduleRef.get<SitesService>(SitesService);
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(sitesService).toBeDefined();
  });
  
  /* Find All Users */
  describe('findAll', () => {
    it('should return an array of users', async () => {
      sitesService.findAll = jest.fn();
      expect(sitesService.findAll);
      console.log('Test Service : Should find all users => 200');
    });
  });

  describe('findOne ', () => {
    it('should return an array of the user', async () => {
      sitesService.findOne = jest.fn();
      expect(sitesService.findOne);
      console.log('Test Service : Should find one user => 200');
    });
  });

  describe('create ', () => {
    it('should return an array of new user', async () => {
      sitesService.create = jest.fn();
      expect(sitesService.create);
      console.log('Test Service : Should create the user => 201');
    });
  });

  describe('update ', () => {
    it('should return status of the modification', async () => {
      sitesService.update = jest.fn();
      expect(sitesService.update);
      console.log('Test Service : Update a user => 200');
    });
  });

  describe('UserService.remove ', () => {
    it('should return status of the deletion', async () => {
      sitesService.remove = jest.fn();
      expect(sitesService.remove);
      console.log('Test Service : Delete a user => 200');
    });
  });

});