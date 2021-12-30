import {google} from "googleapis";
import { Playlist } from "../../models/Playlist";
import { IPlaylistsRepository } from "../IPlaylistsRepository";

import { config } from 'dotenv'
config()

class PlaylistsRepository implements IPlaylistsRepository {

    private youtube = google.youtube('v3')
    private API_KEY = process.env.GOOGLE_API_KEY
    filterItems = 'items(id(playlistId),snippet(publishedAt,channelId,title,description,thumbnails(high(url)),channelTitle))'

    constructor() {}

    async listRandomPlaylists(): Promise<Playlist[]> {
        /**
         * [ ] Listar umas 10 playlists de exemplo
         * [ ] Listar playlists sobre tecnologias
        */

        const all = await this.youtube.search.list({
            q: 'javascript',
            part: ['snippet'],
            maxResults: 10,
            type: ['playlist'],
            key: this.API_KEY,
            fields: this.filterItems
        })

        const playlists: Playlist[] = all.data.items

        return playlists
    }

    async listBycategory(category: string, maxResults: number = 10): Promise<Playlist[]> {
        /**
         * [ ] retornar playlists a partir do name
         * [ ] retornar 10 playlists por padrão
         * [ ] se o user solicitar uma quantidade, retornar a quantidade solicitada
         */

         const all = await this.youtube.search.list({
            q: category,
            part: ['snippet'],
            maxResults: maxResults,
            type: ['playlist'],
            key: this.API_KEY,
            fields: this.filterItems
        })

        const playlists: Playlist[] = all.data.items

        return playlists
    }

    async search(idPlaylist: string) {
        const playlistResponse = await this.youtube.playlistItems.list({
            playlistId: idPlaylist,
            part: ['snippet'],
            key: this.API_KEY
        })

        const playlist = playlistResponse.data.items

        return playlist
    }

}

export { PlaylistsRepository }