import secureRequest from './secureRequest'

const PORT = Number(process.env.PORT) || 3000

console.log('Listen on port', PORT)
const instance = Bun.serve({
  port: PORT,
  async fetch(request: Request) {
    const url = new URL(request.url)
    switch (url.pathname) {
      case '/api/boost':
        return new Response(JSON.stringify(require('../configs/boost')))
      case '/api/cardResult':
        return new Promise(resolve => {
          secureRequest(request).then(data => {
            resolve(new Response(data))
          })
        })
      default:
        return new Response('<img src=https://http.cat/200>', {
          status: 200,
          headers: { 'Content-Type': 'text/html' },
        })
    }

  },
})
