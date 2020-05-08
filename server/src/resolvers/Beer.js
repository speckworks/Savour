function postedBy(parent, args, context) {
    return context.prisma.beer({ id: parent.id }).postedBy()
  }

function createdAt(parent, args, context) {
  return context.prisma.beer({ id: parent.id}).createdAt()
}

function votes(parent, args, context){
  return context.prisma.beer({ id: parent.id}).votes()
}
  module.exports = {
    postedBy,
    votes,
    createdAt
  }