Bun.serve({
  port: 8001,
  hostname: '192.168.100.183',
  fetch(req) {
    const data = {
      method: req.method,
      url: req.url,
      headers: req.headers,
      message: 'Hello World!',
    }
    console.log(data)
    // method get
    if (req.method === 'GET') {
      return new Response(JSON.stringify(data), {
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // method post
    if (req.method === 'POST') {
      return new Response(JSON.stringify(data), {
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // method put
    if (req.method === 'PUT') {
      return new Response(JSON.stringify(data), {
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // method delete
    if (req.method === 'DELETE') {
      return new Response(JSON.stringify(data), {
        headers: { 'Content-Type': 'application/json' },
      });
    }

  },
});