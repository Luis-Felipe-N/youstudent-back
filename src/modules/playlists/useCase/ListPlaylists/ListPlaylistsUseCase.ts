import { Playlist } from "../../models/Playlist"
import { PlaylistsRepository } from "../../repositories/implamations/PlaylistsRepository"

class ListPlaylistsUseCase {
    constructor(private playlistsRepository: PlaylistsRepository) {}
    
    async execute() {
        const playlists = await this.playlistsRepository.listRandomPlaylists()

        return playlists
    }
}

export { ListPlaylistsUseCase }