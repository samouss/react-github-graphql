// Import
import { getConfiguration } from './configure';
import { fetchFromRemoteEndpoint } from './transport';

// Re-Export
export { configure as configureClient } from './configure';

// Export
export const query = (raw, variables = {}) => {
  return fetchFromRemoteEndpoint({
    ...getConfiguration(),
    query: {
      raw,
      variables,
    },
  }).then(res => {
    return res.data;
  });
};
