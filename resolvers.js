import heroes from './heroes.json'
import 'isomorphic-fetch'

export const resolvers = {
    Query:{
        heroes : () => {
            return heroes.sort((a,b)=>{return a.name.localeCompare(b.name)});
        }
    }
}