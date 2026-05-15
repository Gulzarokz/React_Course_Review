import chance from 'chance'

export const c = Chance()
export const fetchUserDetails = () => {
    console.log(c.name({ middle: true }))
    return c.name({ middle: true })
}