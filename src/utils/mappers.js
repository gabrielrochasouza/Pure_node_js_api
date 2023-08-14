export function objectPasswordFilter (obj) {
    if (obj) {
        delete obj['password']
        delete obj['tokenKey']
        return obj
    }
}

export function arrayObjectPasswordFilter(array) {
    if (array) {
        return array.map(obj => {
            delete obj['password']
            delete obj['tokenKey']
            return obj
        })
    }
}