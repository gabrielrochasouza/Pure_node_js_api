import { createCipheriv } from 'node:crypto'
import { key, initVector } from '../consts/key.js';

export function encryptPassword(text) {
    let cipher = createCipheriv('aes-256-cbc', key, initVector);
    let encrypted = cipher.update(text);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return { iv: initVector.toString('hex'), encryptedData: encrypted.toString('hex') };
}