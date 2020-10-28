import { MongoClient } from 'mongodb';
import { Promise } from 'es6-promise';

class Database {

    listAudioFiles() {
        return new Promise((resolve, reject) => {
            this.connect().then((client) => {
                client.db("MusicPlayer").collection("audioFiles").find({})
                    .toArray()
                    .then((res) => {
                        resolve(res);
                    })
                    .catch((err) => {
                        reject(err);
                    })
            })
        })
    }

    searchAudioFiles(search) {
        return new Promise((resolve, reject) => {
            this.connect().then((client) => {
                client.db("MusicPlayer").collection("audioFiles").find({$text: {$search: search}})
                    .toArray()
                    .then((res) => {
                        resolve(res);
                    })
                    .catch((err) => {
                        reject(err);
                    })
            })
        })
    }

    listPlaylists() {
        return new Promise((resolve, reject) => {
            this.connect().then((client) => {
                client.db("MusicPlayer").collection("playlists").find({})
                    .toArray()
                    .then((res) => {
                        resolve(res);
                    })
                    .catch((err) => {
                        reject(err);
                    })
            })
        })
    }

    // createPlaylist() {
    //     return new Promise((resolve, reject) => {
    //         this.connect().then((client: MongoClient) => {
    //             client.db("MusicPlayer").collection("playlists").insertOne({})
    //                 .then((res) => {
    //                     resolve(res);
    //                 })
    //                 .catch((err) => {
    //                     reject(err);
    //                 })
    //         })
    //     })
    // }
    
    connect() {
        const client = new MongoClient(process.env.mongoURL || `mongodb://localhost:27017`);

        return new Promise((resolve, reject) => {
            client.connect()
                .then((client) => {
                    resolve(client);
                })
                .catch((err) => {
                    console.error(err);
                    reject(err);
                })
        })
    }

}

export default new Database();