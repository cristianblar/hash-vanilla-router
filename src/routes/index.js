import { ROUTES } from './routes.js'
import { getHash, link, router } from './router.js'

export const appRouter = router(ROUTES)
export { getHash, link }
