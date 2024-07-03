const port = 8001;
const   hostname = '192.168.100.183';
const handler = (request) => {
  const body = JSON.stringify({
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

console.log(`HTTP server running. Access it at: http://${hostname}:${port}/`);
// to allow on network 
// $ deno run --allow-net .\app.js
Deno.serve({ port }, handler);