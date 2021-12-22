import { response, Router } from 'express'
import { listPlaylistController } from '../modules/playlists/useCase/ListPlaylists'

const playlistRoutes = Router()

playlistRoutes.get("/", ( request, response ) => {
    listPlaylistController.handle(request, response)
})

export { playlistRoutes }