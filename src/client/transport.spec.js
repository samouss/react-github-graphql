import { describe, it } from 'mocha';
import { should } from 'chai';
import * as module from './transport';

should();

describe('transport', () => {
  /**
   * fetchFromRemoteEndpoint
   */
  describe('fetchFromRemoteEndpoint', () => {
    it('should call the graphql endpoint with given query', () => {
      const endpoint = 'http://graphql.dev';
      const options = {};
      const raw = `
        query {
          viewer {
            login
            firstname
            lastname
          }
        }
      `;

      const expectation = {
        endpoint,
        options,
      };

      const result = module.fetchFromRemoteEndpoint({
        endpoint,
        options,
        query: {
          raw,
        },
      });

      result.should.be.deep.equal(expectation);
    });
  });
});
