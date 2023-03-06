import { usersStub } from "../stubs/users.stub"

export const UsersService = jest.fn().mockReturnValue({
    findOne: jest.fn().mockReturnValue(usersStub()),
    findAll: jest.fn().mockReturnValue([usersStub()]),
    create: jest.fn().mockResolvedValue(usersStub()),
    update: jest.fn().mockReturnValue(usersStub()),
    remove: jest.fn().mockReturnValue(usersStub()),
})