import { sitesStub } from "../stubs/sites.stub"

export const SitesService = jest.fn().mockReturnValue({
    findOne: jest.fn().mockReturnValue(sitesStub()),
    findByUrl: jest.fn().mockResolvedValue(sitesStub()),
    findAll: jest.fn().mockReturnValue([sitesStub()]),
    create: jest.fn().mockResolvedValue(sitesStub()),
    update: jest.fn().mockReturnValue(sitesStub()),
    remove: jest.fn().mockReturnValue(sitesStub()),
})