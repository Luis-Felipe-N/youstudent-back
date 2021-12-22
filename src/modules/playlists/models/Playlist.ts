class Playlist {
    id: {
        playlistId: string;
    };
    snippet: {
        publishedAt: string;
        title: string;
        description: string;
        channelId: string;
        thumbnails: {
            high: {
                url: string
            }
        };
        channelTitle: string;
    }
}

export { Playlist }