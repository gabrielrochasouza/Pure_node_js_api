import { createDecipheriv } from 'node:crypto'
import { key, initVector } from '../consts/key.js';

export function decryptPassword(text) {
    let encryptedText = Buffer.from(text, 'hex');
    let decipher = createDecipheriv('aes-256-cbc', Buffer.from(key), initVector);
    let decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString();
}