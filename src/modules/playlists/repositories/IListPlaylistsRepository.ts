import { youtube_v3 } from "googleapis";
import { Playlist } from "../models/Playlist";

interface IListPlaylistsRepository {
    listByName( name: string): Playlist[];
    listRandomPlaylists();
}

export { IListPlaylistsRepository }     