import {IAudioFile} from './AudioFile';

export interface IPlaylist {
    _id: string,
    title: string,
    collection: IAudioFile[]
}

export default class {
    private _id;
    private title;
    private collection;

    constructor(opts: IPlaylist) {
        this._id = opts._id;
        this.title = opts.title;
        this.collection = opts.collection;
    }

    toJSON() {
        return {
            _id: this._id,
            title: this.title,
            collection: this.collection
        }
    }
}