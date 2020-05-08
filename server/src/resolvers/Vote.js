function beer(parent, args, context){
    return context.prisma.vote({ id: parent.id}).beer()
}

function user(parent, args, context){
    return context.prisma.vote({ id: parent.id }).user()
}

module.exports = {
    beer,
    user,
}