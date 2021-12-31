import { Playlist } from "../../models/Playlist"
import { PlaylistsRepository } from "../../repositories/implamations/PlaylistsRepository"

class ListPlaylistsUseCase {
    constructor(private playlistsRepository: PlaylistsRepository) {}
    
    async execute( category: string, maxResults: number ) {
        const playlists = await this.playlistsRepository.listBycategory( category, maxResults )

        return playlists
    }
}

export { ListPlaylistsUseCase }