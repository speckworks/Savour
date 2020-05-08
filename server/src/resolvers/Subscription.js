function newBeerSubscribe(parent, args, context, info){
    return context.prisma.$subscribe.beer({ mutation_in: ['CREATED']}).node()
}

const newBeer = {
    subscribe: newBeerSubscribe,
    resolve: payload => {
        return payload
    },
}

function newVoteSubscribe(parent, args, context, info){
    return context.prisma.$subscribe.vote({ mutation_in: ['CREATED']}).node()
}
const newVote = {
    subscribe: newVoteSubscribe,
    resolve: payload => {
        return payload
    },
}
module.exports = {
    newBeer,
    newVote
}