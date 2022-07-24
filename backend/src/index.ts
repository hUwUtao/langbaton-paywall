const PORT = Number(process.env.PORT) || 3000

console.log('Listen on port', PORT)
Bun.serve({
  port: PORT,
  fetch(request: Request) {
    const url = new URL(request.url)
    switch (url.pathname) {
      default:
        return new Response('oopsie woopsie')
    }
  },
})
