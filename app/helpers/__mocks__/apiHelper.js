const apiServiceMock = jest.genMockFromModule("../apiHelper");

apiServiceMock.apiService = {
  request: jest.fn(),
  find: jest.fn(),
  findOne: jest.fn(),
  create: jest.fn(),
  update: jest.fn(),
  delete: jest.fn(),
  deleteOne: jest.fn()
};

export const apiService = apiServiceMock.apiService;
