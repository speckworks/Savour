function beers(parent, args, context) {
    return context.prisma.user({ id: parent.id }).beers()
  }
  
  module.exports = {
    beers,
  }