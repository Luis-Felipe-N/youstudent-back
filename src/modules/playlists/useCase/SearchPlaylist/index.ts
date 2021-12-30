import { PlaylistsRepository } from "../../repositories/implamations/PlaylistsRepository";
import { SearchPlaylistController } from "./SearchPlaylistController";
import { SearchPlaylistUseCase } from "./SearchPlaylistUseCase";

const playlistsRepositorie = new PlaylistsRepository

const searchPlaylistUseCase = new SearchPlaylistUseCase( playlistsRepositorie )

const searchPlaylistController = new SearchPlaylistController( searchPlaylistUseCase )

export { searchPlaylistController }