import { youtube_v3 } from "googleapis";
import { Playlist } from "../models/Playlist";

interface IPlaylistsRepository {
    listBycategory( category: string ): Promise<Playlist[]>;
    listRandomPlaylists(): Promise<Playlist[]>;
    search( idPlaylist: string );
}

export { IPlaylistsRepository }     