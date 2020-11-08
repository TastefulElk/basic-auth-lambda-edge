// basic-auth.js
const handler = async (event) => {
  const { request } = event.Records[0].cf;
  const headers = request.headers;

  const username = 'username';
  const password = 'password';

  const base64Credentials = Buffer.from(`${username}:${password}`).toString('base64');
  const authString = `Basic ${base64Credentials}`;

  // If authorization header isn't present or doesn't match expected authString, deny the request
  if (
    typeof headers.authorization == 'undefined' ||
    headers.authorization[0].value !== authString
  ) {
    return {
      body: 'Unauthorized',
      headers: {
        'www-authenticate': [{ key: 'WWW-Authenticate', value: 'Basic' }]
      },
      status: '401',
      statusDescription: 'Unauthorized',
    };
  }

  // Continue request processing
  return request;
};

module.exports.handler = handler;
