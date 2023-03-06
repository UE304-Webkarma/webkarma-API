import { Test } from '@nestjs/testing';
import { Sites } from './schemas/sites.schema';
import { sitesStub } from './stubs/sites.stub';
import { SitesController } from './sites.controller';
import { SitesService } from './sites.service';

jest.mock('./sites.service');

describe('SitesController', () => {
  let sitesController: SitesController;
  let sitesService: SitesService;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [],
      controllers: [SitesController],
      providers: [SitesService],
    }).compile();

    sitesController = moduleRef.get<SitesController>(SitesController);
    sitesService = moduleRef.get<SitesService>(SitesService);
    jest.clearAllMocks();
  });

  /* Find All Sites */
  describe('findAll', () => {
    describe('When findAll is called', () => {
      let users: Sites[];
      beforeEach(async () => {
        users = await sitesController.findAll();
      });
      test('Then it should call sitesService', () => {
        expect(sitesService.findAll).toBeCalledWith();
      });
      test('Then it should return all sites', () => {
        expect(users).toEqual([sitesStub()]);
      });
    });
  });

  /* Find One Site By ID */
  describe('findOne', () => {
    describe('When findOne is called', () => {
      let user: Sites;
      beforeEach(async () => {
        user = await sitesController.findOne(sitesStub().id);
      });
      test('Then it should call sitesService', () => {
        expect(sitesService.findOne).toBeCalledWith(sitesStub().id);
      });
      test('Then it should return a site', () => {
        expect(user).toEqual(sitesStub());
      });
    });
  });

  /* Find One Site By URL */
  describe('findByUrl', () => {
    describe('When findByUrl is called', () => {
      let user: Sites;
      beforeEach(async () => {
        user = await sitesController.findByUrl(sitesStub());
      });
      test('Then it should call sitesService', () => {
        expect(sitesService.findByUrl).toHaveBeenCalledWith(sitesStub());
      });
      test('Then it should return a site', () => {
        expect(user).toEqual(sitesStub());
      });
    });
  });

  /* Create One Site */
  describe('create', () => {
    describe('When create is called', () => {
      let user: Sites;
      beforeEach(async () => {
        user = await sitesController.create(sitesStub());
      });
      test('Then it should call sitesService', () => {
        expect(sitesService.create).toHaveBeenCalledWith(sitesStub());
      });
      test('Then it should return a site', () => {
        expect(user).toEqual(sitesStub());
      });
    });
  });

  /* Update One Site */
  describe('update', () => {
    describe('When update is called', () => {
      let user;
      beforeEach(async () => {
        user = await sitesController.update(sitesStub().id, sitesStub());
      });
      test('Then it should call sitesService', () => {
        expect(sitesService.update).toHaveBeenCalledWith(sitesStub().id, sitesStub());
      });
      test('Then it should return a site', () => {
        expect(user).toEqual(sitesStub());
      });
    });
  });

  /* Delete One Site */
  describe('remove', () => {
    describe('When remove is called', () => {
      let user;
      beforeEach(async () => {
        user = await sitesController.remove(sitesStub().id);
      });
      test('Then it should call sitesService', () => {
        expect(sitesService.remove).toHaveBeenCalledWith(sitesStub().id);
      });
      test('Then it should return a status', () => {
        expect(user).toEqual(sitesStub());
      });
    });
  });
});
