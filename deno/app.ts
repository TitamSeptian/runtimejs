const port = 8002;

const handler = (request: Request): Response => {
  const body: Object = JSON.stringify({
    method: request.method,
    url: request.url,
    headers: {
      host: request.headers.get('host'),
      'user-agent': request.headers.get('user-agent'),
      'content-type': request.headers.get('content-type'),
      connection: request.headers.get('connection'),
      'accept-encoding': request.headers.get('accept-encoding'),
    },
    message: 'Hello World!',
  });

  console.log(body);

  if (request.method === 'GET') {
    return new Response(body, {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  if (request.method === 'POST') {
    return new Response(body, {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  if (request.method === 'PUT') {
    return new Response(body, {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  if (request.method === 'DELETE') {
    return new Response(body, {
      headers: { 'Content-Type': 'application/json' },
    });
  }
  
};

console.log(`HTTP server running. Access it at: http://localhost:${port}/`);
Deno.serve({ port }, handler);