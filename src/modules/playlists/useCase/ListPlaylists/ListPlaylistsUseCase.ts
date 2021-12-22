import { Playlist } from "../../models/Playlist"
import { ListPlaylistsRepository } from "../../repositories/implamations/ListPlaylistsRepository"

class ListPlaylistsUseCase {
    constructor(private listPlaylistsRepository: ListPlaylistsRepository) {}
    
    async execute() {
        const playlists = await this.listPlaylistsRepository.listRandomPlaylists()

        return playlists
    }
}

export {ListPlaylistsUseCase }