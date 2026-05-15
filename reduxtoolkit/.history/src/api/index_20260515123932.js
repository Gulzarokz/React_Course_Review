import { chance } from 'chance'

export const chance = Chance()
export const fetchUserDetails = () => {
    console.log(chance.name({ middle: true }))
    return chance.name({ middle: true }))
}