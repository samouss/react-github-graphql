export const fetchFromRemoteEndpoint = ({
  endpoint,
  options,
  query: {
    raw = '',
    variables = {},
  },
}) => {
  const { headers, ...rest } = options;

  const defaultHeaders = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  return fetch(endpoint, {
    ...rest,
    method: 'POST',
    headers: {
      ...defaultHeaders,
      ...headers,
    },
    body: JSON.stringify({
      query: raw,
      variables,
    }),
  }).then(res => {
    return res.json();
  }).then(payload => {
    if (!payload.data && !payload.errors) {
      throw new Error('The response is not a valid GraphQL response.');
    }

    return payload;
  });
};
