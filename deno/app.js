const port = 8001;
const hostname = '192.168.1.11';
const body = {
  message: 'Hello World',
};
const handler = (request) => {
  console.log(body);
  return new Response(JSON.stringify(body), {
    headers: { 'Content-Type': 'application/json' },
  });
};
// to allow on network 
// $ deno run --allow-net .\app.js
Deno.serve({ port }, handler);