import {afterAll, afterEach, beforeAll} from 'vitest';
import {cleanup} from '@testing-library/react';
import '@testing-library/jest-dom';

const {server} = await import('../src/mocks/server');

afterEach(() => {
    cleanup();
});

// Start worker before all tests
beforeAll(() => {
    server.listen()
})

// Close worker after all tests
afterAll(() => {
    server.close()
})

// Reset handlers after each test `important for test isolation`
afterEach(() => {
    server.resetHandlers()
})