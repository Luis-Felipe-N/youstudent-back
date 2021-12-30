import { PlaylistsRepository } from "../../repositories/implamations/PlaylistsRepository";
import { ListPlaylistsController } from "./ListPlaylistsController";
import { ListPlaylistsUseCase } from "./ListPlaylistsUseCase";

const listPlaylistsRepository = new PlaylistsRepository()

const listPlaylistUseCase = new ListPlaylistsUseCase(listPlaylistsRepository)

const listPlaylistController = new ListPlaylistsController(listPlaylistUseCase)

export { listPlaylistController }