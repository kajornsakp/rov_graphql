import heroes from './heroes.json'
import 'isomorphic-fetch'

export const resolvers = {
    Query:{
        heroes : () => {
            console.log("hi")
            return heroes.sort((a,b)=>{return a.name.localeCompare(b.name)});
        },
        heroWithName : (root,{name}) => {
            return heroes.filter((hero)=>{return hero.name == name})[0]
        },
        heroWithRole : (root,{role}) => {
            return heroes.filter((hero)=>{return hero.role.indexOf(role) > -1})
        }
    }
}