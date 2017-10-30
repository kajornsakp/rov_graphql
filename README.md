# ROV GraphQL

This project is for testing graphql with express server

### Requirements
- graphql
- graphql-tools
- express
- express-graphql

### How to setup

```
clone this project
npm install
npm start
```

### Schema
```
type Hero {
    id : ID!
    name : String
    role : [String]
}

type Query {
    heroes : [Hero]
    heroWithName(name : String!) : Hero
    heroWithRole(role : String!) : [Hero]
}
```

### Resolver
```
Query:{
        heroes : () => {
            return heroes.sort((a,b)=>{return a.name.localeCompare(b.name)});
        },
        heroWithName : (root,{name}) => {
            return heroes.filter((hero)=>{return hero.name == name})[0]
        },
        heroWithRole : (root,{role}) => {
            return heroes.filter((hero)=>{return hero.role.indexOf(role) > -1})
        }
    }

```

## TODO

- [ ] add db (mongodb)

- [ ] test with apollo client(iOS,Android,Web)
