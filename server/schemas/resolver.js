const fs = require('fs');

const { AuthenticationError, signToken } = require('../utils/auth');

const { User } = require('../models/index');

module.exports = {
    Query: {
        getAllUsers: async () => {
            return await User.find({});
        },
        getUser: async (_, args) => {
            return await User.findById(args.userId)
        }
    },
    Mutations: {
        createUser: async (_, args)=> {
            const user = await User.create(args);
            const token = signToken(user);

            return { user, token };
        }
    }
}