export interface IAudioFile {
    id: string,
    title: string,
    artist: string[],
    type: string,
    image: string
}

export default class {
    private id;
    private title;
    private artist;
    private type;
    private image;

    constructor(opts: IAudioFile) {
        this.id = opts.id;
        this.title = opts.title;
        this.artist = opts.artist;
        this.type = opts.type;
        this.image = opts.image;
    }

    toJSON() {
        return {
            id: this.id,
            title: this.title,
            artist: this.artist,
            type: this.type,
            image: this.image
        }
    }
}