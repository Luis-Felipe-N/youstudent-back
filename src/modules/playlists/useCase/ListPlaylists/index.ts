import { ListPlaylistsRepository } from "../../repositories/implamations/ListPlaylistsRepository";
import { ListPlaylistsController } from "./ListPlaylistsController";
import { ListPlaylistsUseCase } from "./ListPlaylistsUseCase";

const listPlaylistsRepository = new ListPlaylistsRepository()

const listPlaylistUseCase = new ListPlaylistsUseCase(listPlaylistsRepository)

const listPlaylistController = new ListPlaylistsController(listPlaylistUseCase)

export { listPlaylistController }