import { fastify } from 'fastify';

const server = fastify ()

server.get('/', () => {
  return 'Hello World'
})

server.get('/hello', () => {
  return "Hello Katchas"
})

server.get('/node', () => {
  return 'Hello Node.js'
})

server.listen ({

  host: '0.0.0.0',
  port: '3333',
});

