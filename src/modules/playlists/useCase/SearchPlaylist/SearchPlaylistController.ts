import { Request, Response } from 'express'
import { SearchPlaylistUseCase } from './SearchPlaylistUseCase'

class SearchPlaylistController {
    constructor( private searchPlaylistUseCase: SearchPlaylistUseCase) {}

    async handle( request: Request, response: Response ) {
        const { idPlaylist } = request.body

        const playlist = await this.searchPlaylistUseCase.execute( idPlaylist )

        response.status(200).json({
            playlist
        })
    }
}
    
export { SearchPlaylistController }