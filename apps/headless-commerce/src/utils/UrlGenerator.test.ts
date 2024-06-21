/* eslint-disable sonarjs/no-duplicate-string */
import { afterEach } from 'node:test';

import * as config from '@headless-commerce/config/config';
import { Locale } from '@headless-commerce/config/locale';
import { type NavigationLink, SiteId } from '@headless-commerce/gql/generated/graphql';
import * as environment from '@headless-commerce/utils/environment';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { ELinkType, generateUrlFromLinkContent } from './UrlGenerator';

const isServerSpy = vi.spyOn(environment, 'isServer');
const isDevelopmentSpy = vi.spyOn(environment, 'isDevelopment');
const baseURLSpy = vi.spyOn(config, 'baseURL');

const siteId = SiteId['Usa'];
const locale = Locale['en-us'];

const contentfulMetadata = {
  tags: [
    {
      id: 'siteId',
      name: 'siteId',
    },
  ],
};

const sys = {
  id: 'id',
  environmentId: 'environmentId',
  spaceId: 'spaceId',
};

describe('generateUrlFromLinkContent', () => {
  describe('generate URL', () => {
    beforeEach(() => {
      isServerSpy.mockImplementation(() => true);
      isDevelopmentSpy.mockImplementation(() => false);
      baseURLSpy.mockImplementation(() => 'https://test.suitsupply.com');
    });

    afterEach(() => {
      isDevelopmentSpy.mockRestore();
      baseURLSpy.mockRestore();
    });

    describe('When passed a relative URL', () => {
      it('should return a relative URL', () => {
        const link: NavigationLink = {
          relativeUrl: '/relative/url',
          contentfulMetadata,
          sys,
        };
        const actual = generateUrlFromLinkContent(link, siteId, locale);
        const expected = 'https://test.suitsupply.com/en-us/relative/url';
        expect(actual).toBe(expected);
      });
    });

    describe('When passed the black tie package link', () => {
      it('should return the correct URL', () => {
        const link: NavigationLink = {
          __typename: 'NavigationLink',
          linkType: 'Category',
          referenceId: null,
          relativeUrl: '/black-tie-package',
          extraParameters: null,
          contentfulMetadata,
          sys,
        };
        const actual = generateUrlFromLinkContent(link, siteId, locale);
        const expected = 'https://test.suitsupply.com/en-us/black-tie-package';
        expect(actual).toBe(expected);
      });
    });

    describe('When passed the white shirts link', () => {
      it('should return the correct URL', () => {
        const link: NavigationLink = {
          __typename: 'NavigationLink',
          linkType: 'Category',
          referenceId: null,
          relativeUrl: '/men/shirts',
          extraParameters: '?prefn1=colorID&prefv1=White',
          contentfulMetadata,
          sys,
        };
        const actual = generateUrlFromLinkContent(link, siteId, locale);
        const expected = 'https://test.suitsupply.com/en-us/men/shirts?prefn1=colorID&prefv1=White';
        expect(actual).toBe(expected);
      });
    });
  });

  describe('When passed extraParameters', () => {
    it('should return the extraParameters in the querystring', () => {
      const link: NavigationLink = {
        relativeUrl: '/relative/url',
        extraParameters: 'value1=value1&value2=value2',
        contentfulMetadata,
        sys,
      };
      const actual = generateUrlFromLinkContent(link, siteId, locale);
      const expected = 'https://test.suitsupply.com/en-us/relative/url?value1=value1&value2=value2';
      expect(actual).toBe(expected);
    });
  });

  describe('When passed a linkType of CATEGORY', () => {
    describe('When not passed a referenceId', () => {
      // TODO: Fix this case. It shouldn't happen.
      it('should return the correct result', () => {
        const link: NavigationLink = {
          linkType: ELinkType.CATEGORY,
          contentfulMetadata,
          sys,
        };
        const result = generateUrlFromLinkContent(link, siteId, locale);
        expect(result).toBe(
          'https://test.suitsupply.com/on/demandware.store/Sites-USA-Site/en_US/Search-Show?cgid=undefined',
        );
      });
    });
    describe('When passed a referenceId', () => {
      it('should return the correct result', () => {
        const link: NavigationLink = {
          linkType: ELinkType.CATEGORY,
          referenceId: 'testReferenceId',
          contentfulMetadata,
          sys,
        };
        const result = generateUrlFromLinkContent(link, siteId, locale);
        expect(result).toBe(
          'https://test.suitsupply.com/on/demandware.store/Sites-USA-Site/en_US/Search-Show?cgid=testReferenceId',
        );
      });
    });
  });

  describe('When passed a linkType of SFCC_CONTENT_ASSET', () => {
    describe('When not passed a referenceId', () => {
      // TODO: Fix this case. It shouldn't happen.
      it('should return the correct result', () => {
        const link: NavigationLink = {
          linkType: ELinkType.SFCC_CONTENT_ASSET,
          contentfulMetadata,
          sys,
        };
        const result = generateUrlFromLinkContent(link, siteId, locale);
        expect(result).toBe(
          'https://test.suitsupply.com/on/demandware.store/Sites-USA-Site/en_US/Page-Show?cid=undefined',
        );
      });
    });
    describe('When passed a referenceId', () => {
      it('should return the correct result', () => {
        const link: NavigationLink = {
          linkType: ELinkType.SFCC_CONTENT_ASSET,
          referenceId: 'testReferenceId',
          contentfulMetadata,
          sys,
        };
        const result = generateUrlFromLinkContent(link, siteId, locale);
        expect(result).toBe(
          'https://test.suitsupply.com/on/demandware.store/Sites-USA-Site/en_US/Page-Show?cid=testReferenceId',
        );
      });
    });
  });

  describe('When passed a linkType of SFCC_CONTROLLER', () => {
    describe('When not passed a referenceId', () => {
      // TODO: Fix this case. It shouldn't happen.
      it('should return the correct result', () => {
        const link: NavigationLink = {
          linkType: ELinkType.SFCC_CONTROLLER,
          contentfulMetadata,
          sys,
        };
        const result = generateUrlFromLinkContent(link, siteId, locale);
        expect(result).toBe('https://test.suitsupply.com/on/demandware.store/Sites-USA-Site/en_US/undefined');
      });
    });
    describe('When passed a referenceId', () => {
      it('should return the correct result', () => {
        const link: NavigationLink = {
          linkType: ELinkType.SFCC_CONTROLLER,
          referenceId: 'testReferenceId',
          contentfulMetadata,
          sys,
        };
        const result = generateUrlFromLinkContent(link, siteId, locale);
        expect(result).toBe('https://test.suitsupply.com/on/demandware.store/Sites-USA-Site/en_US/testReferenceId');
      });
    });
  });

  describe('When passed something else', () => {
    it('should return an empty string', () => {
      const link: NavigationLink = {
        contentfulMetadata,
        sys,
      };
      const actual = generateUrlFromLinkContent(link, siteId, locale);
      const expected = '';
      expect(actual).toBe(expected);
    });
  });
});
