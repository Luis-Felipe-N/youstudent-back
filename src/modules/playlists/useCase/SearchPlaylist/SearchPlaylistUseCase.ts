import { PlaylistsRepository } from "../../repositories/implamations/PlaylistsRepository";

class SearchPlaylistUseCase {
    constructor( private playlistsRepositorie: PlaylistsRepository) {}

    async execute( idPlaylist: string ) {
        const playlist = await this.playlistsRepositorie.search( idPlaylist )
        return playlist
    }

}

export { SearchPlaylistUseCase }