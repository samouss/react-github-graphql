import { describe, it } from 'mocha';
import { should } from 'chai';
import * as module from './configure';

should();

describe('configureClient', () => {
  /**
   * configureClient
   */
  describe('configureClient', () => {
    it('should configure the client with endpoint and options', () => {
      const endpoint = 'http://graphql.dev';
      const options = {};

      const expectation = {
        endpoint,
        options,
      };

      const result = module.configureClient(endpoint, options);

      result.should.be.deep.equal(expectation);
    });
  });
});
