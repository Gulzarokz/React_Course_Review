import { chance } from 'chance'

export const chances = Chance()
export const fakeApi = () => {
    console.log(chances.name({ middle: true }))
    return chances.name({ middle: true })
}