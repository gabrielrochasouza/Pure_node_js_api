import { readFile, writeFile } from 'node:fs/promises'


const databasePath = new URL('../../db.json', import.meta.url);

class Database {
    #database = {}
    
    constructor () {
        this.#readFile()
    }
    async #persistInFile () {
        await writeFile(databasePath, JSON.stringify(this.#database, null, 4) )
    }
    async #readFile () {
        readFile(new URL(databasePath), 'utf-8').then((data)=> {
            this.#database = JSON.parse(data)
        }).catch(()=> {
            this.#persistInFile();
        })
    }
    async select (table) {
        return readFile(new URL(databasePath), 'utf-8').then((data)=> {
            this.#database = JSON.parse(data)
            return this.#database[table] ?? []
        }).catch(()=> {
            this.#persistInFile();
        })
    }
    insert (table, data) {
        if (!this.#database[table]) {
            this.#database[table] = [data];
        } else if (this.#database[table]) {
            this.#database[table].push(data);
        }
        this.#persistInFile()
    }
    delete (table, id) {
        const index = this.#database[table]?.findIndex(row => row.id === id)
        if (index > -1) {
            this.#database[table].splice(index, 1)
            this.#persistInFile()
        }
    }
    async update (table, id, data) {
        const index = this.#database[table]?.findIndex(row => row.id === id)
        if (index > -1) {
            this.#database[table][index] = { ...this.#database[table][index], ...data}
            await this.#persistInFile()
        }
    }

}

export default new Database();
