import { createCipheriv } from 'node:crypto'
import { key, initVector } from '../consts/key.js';

export function encryptPassword(text) {
    const cipher = createCipheriv('aes-256-cbc', key, initVector);
    const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);
    return encrypted.toString('hex');
}