import {LatLonDb} from './LatLonDb'

// Imitates api call for coordinates
export const getCoords = (name) => {
    return new Promise((resolve, reject) => {
        const data = LatLonDb.find(({city}) => city === name)
        return data ? resolve(data) : reject('City does not exist')
    })
}