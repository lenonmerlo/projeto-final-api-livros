const uuid = require('uuid').v4
const bcrypt = require('bcrypt')

const users = [
    { id: '1', name: 'Lenon Merlo', email: 'lenon@email.com', password: '123456' },
    { id: '2', name: 'Luna Abacaxi', email: 'luna@email.com', password: '123456' },
    { id: '3', name: 'Harry Ovomaltine', email: 'harry@email.com', password: '123456' }
]

module.exports = {

    getAllUsers: () => users,

    getUserById: (id) => users.find(user => user.id === id),  // Corrigido para 'user'

    getUserByEmail: (email) => users.find(user => user.email === email),  // Corrigido para 'user'

    createUser: (name, email, password) => {
        const newUser = {
            id: uuid(),
            name,
            email,
            password: bcrypt.hashSync(password, 10)
        }
        users.push(newUser)
        return newUser
    } 

}
