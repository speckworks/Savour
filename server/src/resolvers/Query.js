async function product(parent, args, context, info) {
    const where = args.filter ? {
      OR: [
        { description_contains: args.filter },
        { url_contains: args.filter },
      ],
    }: {}

    const beers = await context.prisma.beers({
      where,
      skip: args.skip,
      first: args.first,
      orderBy: args.orderBy
    })
    const count = await context.prisma
    .beersConnection({
      where,
    })
    .aggregate()
    .count()
    return {
      beers,
      count
    }
  }
  
  module.exports = {
    product,
  }