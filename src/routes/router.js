export function router(routes) {
  return function (htmlContainer) {
    return function (hash) {
      const contentToLoad = routes[hash] || routes.error
      htmlContainer.innerHTML = contentToLoad
    }
  }
}

export function getHash(window) {
  return window.location.hash.slice(1) || 'home'
}

export function link(window, hash) {
  window.location.hash = hash
}
