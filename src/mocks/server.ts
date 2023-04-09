import { setupServer } from 'msw/node';
import { handler } from './heandler';

export const server = setupServer(...handler);
