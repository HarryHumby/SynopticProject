export interface IAudioFile {
    id: string,
    title: string,
    artist: string[],
    album: string,
    type: string,
    image: string
}

export default class {
    private id;
    private title;
    private artist;
    private album;
    private type;
    private image;

    constructor(opts: IAudioFile) {
        this.id = opts.id;
        this.title = opts.title;
        this.artist = opts.artist;
        this.album = opts.album;
        this.type = opts.type;
        this.image = opts.image;
    }

    toJSON() {
        return {
            id: this.id,
            title: this.title,
            artist: this.artist,
            album: this.album,
            type: this.type,
            image: this.image
        }
    }
}