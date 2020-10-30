import {IAudioFile} from './AudioFile';

export interface IPlaylist {
    id: string,
    title: string,
    collection: IAudioFile[]
}

export default class {
    private id;
    private title;
    private collection;

    constructor(opts: IPlaylist) {
        this.id = opts.id;
        this.title = opts.title;
        this.collection = opts.collection;
    }

    toJSON() {
        return {
            id: this.id,
            title: this.title,
            collection: this.collection
        }
    }
}