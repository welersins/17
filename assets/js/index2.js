import { getDate } from "./getDate.js";

const generateHash = (timestamp, privateKey, publicKey) => {
    const hash = CryptoJS.MD5(timestamp + privateKey, publicKey).toString()
    return hash;
}

const getMarvelData  = (offset) => {
    const timestamp = new Date().getTime().toString();
    const hash = generateHash(timestamp, privateKey, publicKey);
    const limit = 20;
    const apiUrl = `https://gateway.marvel.com/v1/public/characters`
}