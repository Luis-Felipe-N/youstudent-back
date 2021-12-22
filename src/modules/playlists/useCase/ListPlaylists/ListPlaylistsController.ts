import { Request, Response } from 'express'
import { ListPlaylistsUseCase } from './ListPlaylistsUseCase'

class ListPlaylistsController {
    constructor(private listPlaylistsUseCase: ListPlaylistsUseCase) {}

    async handle(request: Request, response: Response) {
        const allPlaylists = await this.listPlaylistsUseCase.execute()

        return response.json({allPlaylists})
    }
}


export { ListPlaylistsController }