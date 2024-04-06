const gql = String.raw;

module.exports = gql`

type User {
    _id: ID
    username: String
    password: String
    email: String
}

type Query {
    getAllUsers: [User]
    getUser(_id: ID): User
}

type Mutation {
    createUser(username: String, password: String, email: String): Auth 
}
`