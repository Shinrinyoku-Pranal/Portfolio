addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  return fetch(new URL(request.url, 'https://example.com').toString(), {
    cf: { cacheEverything: true }
  })
}