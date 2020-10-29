import {IAudioFile} from './AudioFile';

export interface IPlaylist {
    id: string,
    title: string,
    owner: string,
    collection: IAudioFile[]
}

export default class {
    private id;
    private title;
    private owner;
    private collection;

    constructor(opts: IPlaylist) {
        this.id = opts.id;
        this.title = opts.title;
        this.owner = opts.owner;
        this.collection = opts.collection;
    }

    toJSON() {
        return {
            id: this.id,
            title: this.title,
            owner: this.owner,
            collection: this.collection
        }
    }
}