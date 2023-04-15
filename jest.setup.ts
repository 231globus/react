import '@testing-library/jest-dom/extend-expect';
import AbortController from 'abort-controller';
import { fetch, Headers, Request, Response } from 'cross-fetch';
import { server } from './src/mocks/server';

global.fetch = fetch;
global.Headers = Headers;
global.Request = Request;
global.Response = Response;
global.AbortController = AbortController as typeof global.AbortController;

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
