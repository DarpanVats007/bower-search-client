declare module "jest-fetch-mock" {
  interface FetchMock {
    enableMocks(): void;
    disableMocks(): void;
    resetMocks(): void;
    clearMocks(): void;
    mockResponse(response: string | Response): void;
    mockResponseOnce(response: string | Response): void;
    mockReject(response: Error): void;
    mockRejectOnce(response: Error): void;
  }

  const fetchMock: FetchMock;
  export default fetchMock;
}
