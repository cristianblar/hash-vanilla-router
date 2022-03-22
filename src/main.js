import { appRouter, getHash, link } from './routes/index.js'

window.addEventListener('load', () => {
  const rootDiv = document.getElementById('content')
  const currentRouter = appRouter(rootDiv)
  currentRouter(getHash(window))
  document
    .querySelectorAll('button[id$=link]')
    .forEach(b =>
      b.addEventListener('click', () => link(window, b.id.split('-')[0]))
    )
  window.addEventListener('hashchange', () => currentRouter(getHash(window)))
})
