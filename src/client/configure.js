// default client configuration
const configuration = {
  endpoint: '',
  options: {},
};

export const configure = (endpoint, options) => {
  configuration.endpoint = endpoint;
  configuration.options = options;

  return configuration;
};

export const getConfiguration = () => configuration;
