import { playlistRoutes } from './playlist.routes'

import { Router }  from 'express'

const router = Router()

router.use("/playlist", playlistRoutes)

export { router }