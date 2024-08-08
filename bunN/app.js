Bun.serve({
  port: 8001,
  hostname: '192.168.1.11',
  fetch(req) {
    const body = { message: 'Hello World' };
    console.log(body);
    return new Response(JSON.stringify(body), {
      headers: { 'Content-Type': 'application/json' },
    });
  },
});