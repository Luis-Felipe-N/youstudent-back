import { response, Router } from 'express'
import { listPlaylistController } from '../modules/playlists/useCase/ListPlaylists'
import { searchPlaylistController } from '../modules/playlists/useCase/SearchPlaylist'

const playlistRoutes = Router()

playlistRoutes.get("/", ( request, response ) => {
})

playlistRoutes.post("/", ( request, response ) => {
    listPlaylistController.handle(request, response)
})

playlistRoutes.post("/search", ( request, response ) => {
    searchPlaylistController.handle( request, response )
})

export { playlistRoutes }