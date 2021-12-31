import { Request, Response } from 'express'
import { ListPlaylistsUseCase } from './ListPlaylistsUseCase'

class ListPlaylistsController {
    constructor(private listPlaylistsUseCase: ListPlaylistsUseCase) {}

    async handle(request: Request, response: Response) {
        const { category } = request.body
        const maxResults = Number(request.query.maxResults)
    
        const allPlaylists = await this.listPlaylistsUseCase.execute( category, maxResults )

        console.log( allPlaylists )

        return response.json({allPlaylists})
    }
}


export { ListPlaylistsController }