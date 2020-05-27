function postedBy(parent, args, context) {
    return context.prisma.beer({ id: parent.id }).postedBy()
  }

function createdAt(parent, args, context) {
  return context.prisma.beer({ id: parent.id}).createdAt()
}

function Beer(parent, args, context){
  return context.prisma.beer({ id: parent.id}).beer()
}

function votes(parent, args, context){
  return context.prisma.beer({ id: parent.id}).votes()
}
function img(parent, args, context){
  return context.prisma.beer({ id: parent.id}).img()
}
  module.exports = {
    postedBy,
    votes,
    createdAt,
    Beer,
    img
  }