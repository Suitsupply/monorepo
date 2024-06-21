/* eslint-disable sonarjs/no-duplicate-string */
import { baseURL } from '@headless-commerce/config/config';
import * as environment from '@headless-commerce/utils/environment';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

describe('config', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('baseURL', () => {
    describe('When isServer is false', () => {
      it('should return the value browser host', () => {
        const mockedIsServer = vi.spyOn(environment, 'isServer').mockReturnValue(false);

        const actual = baseURL();
        expect(mockedIsServer).toHaveBeenCalledTimes(1);
        expect(actual).toBe('http://localhost:3000');
      });
    });

    describe('When isServer is true', () => {
      beforeEach(() => {
        process.env.NEXT_PUBLIC_SFCC_ENVIRONEMENT_BASE_URL = 'testvalue.com';
      });

      afterEach(() => {
        delete process.env.NEXT_PUBLIC_SFCC_ENVIRONEMENT_BASE_URL;
      });

      describe('When isDevelopment is true', () => {
        it('should return http://localhost:3000', () => {
          const mockedIsServer = vi.spyOn(environment, 'isServer').mockReturnValue(true);
          const mockedIsDevelopment = vi.spyOn(environment, 'isDevelopment').mockReturnValue(true);

          const actual = baseURL();
          expect(mockedIsServer).toHaveBeenCalledTimes(1);
          expect(mockedIsDevelopment).toHaveBeenCalledTimes(1);
          expect(actual).toBe('http://localhost:3000');
        });
      });

      describe('When isLive is true', () => {
        it('should return https://testvalue.com', () => {
          const mockedIsServer = vi.spyOn(environment, 'isServer').mockReturnValue(true);
          const mockedIsDevelopment = vi.spyOn(environment, 'isDevelopment').mockReturnValue(false);
          const mockedIsLive = vi.spyOn(environment, 'isLive').mockReturnValue(true);

          const actual = baseURL();
          expect(mockedIsDevelopment).toHaveBeenCalledTimes(1);
          expect(mockedIsServer).toHaveBeenCalledTimes(1);
          expect(mockedIsLive).toHaveBeenCalledTimes(1);
          expect(actual).toBe('https://testvalue.com');
        });
      });

      describe('When isAcceptance is true', () => {
        it('should return https://testvalue.com', () => {
          const mockedIsDevelopment = vi.spyOn(environment, 'isDevelopment').mockReturnValue(false);
          const mockedIsServer = vi.spyOn(environment, 'isServer').mockReturnValue(true);
          const mockedIsAcceptance = vi.spyOn(environment, 'isAcceptance').mockReturnValue(true);

          const actual = baseURL();
          expect(mockedIsDevelopment).toHaveBeenCalledTimes(1);
          expect(mockedIsServer).toHaveBeenCalledTimes(1);
          expect(mockedIsAcceptance).toHaveBeenCalledTimes(1);
          expect(actual).toBe('https://testvalue.com');
        });
      });

      describe('When isTesting is true', () => {
        it('should return https://testvalue.com', () => {
          const mockedIsDevelopment = vi.spyOn(environment, 'isDevelopment').mockReturnValue(false);
          const mockedIsServer = vi.spyOn(environment, 'isServer').mockReturnValue(true);
          const mockedIsTesting = vi.spyOn(environment, 'isTesting').mockReturnValue(true);

          const actual = baseURL();
          expect(mockedIsDevelopment).toHaveBeenCalledTimes(1);
          expect(mockedIsServer).toHaveBeenCalledTimes(1);
          expect(mockedIsTesting).toHaveBeenCalledTimes(1);
          expect(actual).toBe('https://testvalue.com');
        });
      });

      describe('When all the above are false', () => {
        it('should return http://localhost:3000', () => {
          const mockedIsDevelopment = vi.spyOn(environment, 'isDevelopment').mockReturnValue(false);
          const mockedIsServer = vi.spyOn(environment, 'isServer').mockReturnValue(true);
          const mockedIsLive = vi.spyOn(environment, 'isLive').mockReturnValue(false);
          const mockedIsAcceptance = vi.spyOn(environment, 'isAcceptance').mockReturnValue(false);
          const mockedIsTesting = vi.spyOn(environment, 'isTesting').mockReturnValue(false);

          const actual = baseURL();
          expect(mockedIsDevelopment).toHaveBeenCalledTimes(1);
          expect(mockedIsServer).toHaveBeenCalledTimes(1);
          expect(mockedIsLive).toHaveBeenCalledTimes(1);
          expect(mockedIsAcceptance).toHaveBeenCalledTimes(1);
          expect(mockedIsTesting).toHaveBeenCalledTimes(1);
          expect(actual).toBe('http://localhost:3000');
        });
      });
    });
  });
});
