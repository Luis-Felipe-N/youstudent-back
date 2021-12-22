import {google} from "googleapis";
import { Playlist } from "../../models/Playlist";
import { IListPlaylistsRepository } from "../IListPlaylistsRepository";

import { config } from 'dotenv'
config()


class ListPlaylistsRepository implements IListPlaylistsRepository {

    private youtube = google.youtube('v3')
    private API_KEY = process.env.GOOGLE_API_KEY



    constructor() {}

    async listRandomPlaylists() {
        /**
         * [ ] Listar umas 10 playlists de exemplo
         * [ ] Listar playlists sobre tecnologias
        */
        const filterItems = 'items(id(playlistId),snippet(publishedAt,channelId,title,description,thumbnails(high(url)),channelTitle))'

        const all = await this.youtube.search.list({
            q: 'progra',
            part: ['snippet'],
            maxResults: 10,
            type: ['playlist'],
            key: this.API_KEY,
            fields: filterItems
        })

        const playlists = all.data.items

        return playlists
    }

    listByName(name: string): Playlist[] {

        throw new Error("Method not implemented.");
    }

}

export { ListPlaylistsRepository }