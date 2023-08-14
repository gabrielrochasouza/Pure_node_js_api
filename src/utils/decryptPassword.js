import { createDecipheriv } from 'node:crypto'
import { key, initVector } from '../consts/key.js';

export function decryptPassword(text) {
    let decipher = createDecipheriv('aes-256-cbc', Buffer.from(key), initVector);
    let decrypted = decipher.update(Buffer.from(text, 'hex'));
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString();
}