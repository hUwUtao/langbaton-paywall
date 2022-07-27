const PORT = Number(process.env.PORT) || 3000

console.log('Listen on port', PORT)
const instance = Bun.serve({
  port: PORT,
  async fetch(request: Request) {
    const url = new URL(request.url)
    switch (url.pathname) {
      case '/api/boost':
        // serve file config.json
        return new Response(JSON.stringify(require('../configs/boost')))
      default:
        return new Response('oopsie woopsie')
    }
  },
})
