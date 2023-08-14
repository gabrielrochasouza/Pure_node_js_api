export const buildRoutePath = (path) => {
    const regex = /:([a-zA-Z]+)/g
    const pathWithParams = path.replace(regex, '(?<$1>[a-z0-9\-_]+)')

    const pathRegex = new RegExp(`^${pathWithParams}`)

    return pathRegex
}