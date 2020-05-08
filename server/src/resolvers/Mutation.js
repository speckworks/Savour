const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { APP_SECRET, getUserId } = require('../utils');

async function signup(parent, args, context, info) {
    // this encrypts the password
    const hashedPassword = await bcrypt.hash(args.password, 10)
    // this creates a new user using the hashed pw
    const {password, ...user} = await context.prisma.createUser({ ...args, password: hashedPassword })
  
    // this assigns a jwt token to return to the frontend
    const token = jwt.sign({ userId: user.id }, APP_SECRET)
  
    // this returns the newly created object
    return {
      token,
      user,
    }
  }
  
  async function login(parent, args, context, info) {
    // this checks for user by email given and password
    const {password, ...user} = await context.prisma.user({ email: args.email })
    if (!user) {
      throw new Error('No such user found')
    }
  
    // this checks the stored encrypted password by hashing the user submitted one
    const valid = await bcrypt.compare(args.password, password)
    if (!valid) {
      throw new Error('Invalid password')
    }
  
    const token = jwt.sign({ userId: user.id }, APP_SECRET)
  
    // returns the token object
    return {
      token,
      user,
    }
  }

  function post(parent, args, context, info){
      const userId = getUserId(context);
      return context.prisma.createBeer({
        name: args.name,
        abv: args.abv,
        description: args.description,
        body: args.body,
        postedBy: { connect: { id: userId } },
      })
  }

  async function vote(parent, args, context, info){
    const userId = getUserId(context)
    const voteExists = await context.prisma.$exists.vote({
      user: { id: userId },
      beer: { id: args.beerId },
    })
    if (voteExists) {
      throw new Error(`Already voted for beer: ${args.beerId}`)
    }
    return context.prisma.createVote({
      user: { connect: {id: userId } },
      beer: { connect: { id: args.beerId } },
    })
  }
  
  module.exports = {
    signup,
    login,
    post,
    vote,
  }