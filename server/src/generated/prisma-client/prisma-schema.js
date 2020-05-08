module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateBeer {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type AggregateVote {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Beer {
  id: ID!
  name: String!
  abv: Int!
  body: String!
  description: String!
  postedBy: User
  votes(where: VoteWhereInput, orderBy: VoteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Vote!]
  createdAt: DateTime!
  updatedAt: DateTime!
}

type BeerConnection {
  pageInfo: PageInfo!
  edges: [BeerEdge]!
  aggregate: AggregateBeer!
}

input BeerCreateInput {
  id: ID
  name: String!
  abv: Int!
  body: String!
  description: String!
  postedBy: UserCreateOneWithoutBeersInput
  votes: VoteCreateManyWithoutBeerInput
}

input BeerCreateManyWithoutPostedByInput {
  create: [BeerCreateWithoutPostedByInput!]
  connect: [BeerWhereUniqueInput!]
}

input BeerCreateOneWithoutVotesInput {
  create: BeerCreateWithoutVotesInput
  connect: BeerWhereUniqueInput
}

input BeerCreateWithoutPostedByInput {
  id: ID
  name: String!
  abv: Int!
  body: String!
  description: String!
  votes: VoteCreateManyWithoutBeerInput
}

input BeerCreateWithoutVotesInput {
  id: ID
  name: String!
  abv: Int!
  body: String!
  description: String!
  postedBy: UserCreateOneWithoutBeersInput
}

type BeerEdge {
  node: Beer!
  cursor: String!
}

enum BeerOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  abv_ASC
  abv_DESC
  body_ASC
  body_DESC
  description_ASC
  description_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type BeerPreviousValues {
  id: ID!
  name: String!
  abv: Int!
  body: String!
  description: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

input BeerScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  abv: Int
  abv_not: Int
  abv_in: [Int!]
  abv_not_in: [Int!]
  abv_lt: Int
  abv_lte: Int
  abv_gt: Int
  abv_gte: Int
  body: String
  body_not: String
  body_in: [String!]
  body_not_in: [String!]
  body_lt: String
  body_lte: String
  body_gt: String
  body_gte: String
  body_contains: String
  body_not_contains: String
  body_starts_with: String
  body_not_starts_with: String
  body_ends_with: String
  body_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [BeerScalarWhereInput!]
  OR: [BeerScalarWhereInput!]
  NOT: [BeerScalarWhereInput!]
}

type BeerSubscriptionPayload {
  mutation: MutationType!
  node: Beer
  updatedFields: [String!]
  previousValues: BeerPreviousValues
}

input BeerSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: BeerWhereInput
  AND: [BeerSubscriptionWhereInput!]
  OR: [BeerSubscriptionWhereInput!]
  NOT: [BeerSubscriptionWhereInput!]
}

input BeerUpdateInput {
  name: String
  abv: Int
  body: String
  description: String
  postedBy: UserUpdateOneWithoutBeersInput
  votes: VoteUpdateManyWithoutBeerInput
}

input BeerUpdateManyDataInput {
  name: String
  abv: Int
  body: String
  description: String
}

input BeerUpdateManyMutationInput {
  name: String
  abv: Int
  body: String
  description: String
}

input BeerUpdateManyWithoutPostedByInput {
  create: [BeerCreateWithoutPostedByInput!]
  delete: [BeerWhereUniqueInput!]
  connect: [BeerWhereUniqueInput!]
  set: [BeerWhereUniqueInput!]
  disconnect: [BeerWhereUniqueInput!]
  update: [BeerUpdateWithWhereUniqueWithoutPostedByInput!]
  upsert: [BeerUpsertWithWhereUniqueWithoutPostedByInput!]
  deleteMany: [BeerScalarWhereInput!]
  updateMany: [BeerUpdateManyWithWhereNestedInput!]
}

input BeerUpdateManyWithWhereNestedInput {
  where: BeerScalarWhereInput!
  data: BeerUpdateManyDataInput!
}

input BeerUpdateOneRequiredWithoutVotesInput {
  create: BeerCreateWithoutVotesInput
  update: BeerUpdateWithoutVotesDataInput
  upsert: BeerUpsertWithoutVotesInput
  connect: BeerWhereUniqueInput
}

input BeerUpdateWithoutPostedByDataInput {
  name: String
  abv: Int
  body: String
  description: String
  votes: VoteUpdateManyWithoutBeerInput
}

input BeerUpdateWithoutVotesDataInput {
  name: String
  abv: Int
  body: String
  description: String
  postedBy: UserUpdateOneWithoutBeersInput
}

input BeerUpdateWithWhereUniqueWithoutPostedByInput {
  where: BeerWhereUniqueInput!
  data: BeerUpdateWithoutPostedByDataInput!
}

input BeerUpsertWithoutVotesInput {
  update: BeerUpdateWithoutVotesDataInput!
  create: BeerCreateWithoutVotesInput!
}

input BeerUpsertWithWhereUniqueWithoutPostedByInput {
  where: BeerWhereUniqueInput!
  update: BeerUpdateWithoutPostedByDataInput!
  create: BeerCreateWithoutPostedByInput!
}

input BeerWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  abv: Int
  abv_not: Int
  abv_in: [Int!]
  abv_not_in: [Int!]
  abv_lt: Int
  abv_lte: Int
  abv_gt: Int
  abv_gte: Int
  body: String
  body_not: String
  body_in: [String!]
  body_not_in: [String!]
  body_lt: String
  body_lte: String
  body_gt: String
  body_gte: String
  body_contains: String
  body_not_contains: String
  body_starts_with: String
  body_not_starts_with: String
  body_ends_with: String
  body_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  postedBy: UserWhereInput
  votes_every: VoteWhereInput
  votes_some: VoteWhereInput
  votes_none: VoteWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [BeerWhereInput!]
  OR: [BeerWhereInput!]
  NOT: [BeerWhereInput!]
}

input BeerWhereUniqueInput {
  id: ID
}

scalar DateTime

scalar Long

type Mutation {
  createBeer(data: BeerCreateInput!): Beer!
  updateBeer(data: BeerUpdateInput!, where: BeerWhereUniqueInput!): Beer
  updateManyBeers(data: BeerUpdateManyMutationInput!, where: BeerWhereInput): BatchPayload!
  upsertBeer(where: BeerWhereUniqueInput!, create: BeerCreateInput!, update: BeerUpdateInput!): Beer!
  deleteBeer(where: BeerWhereUniqueInput!): Beer
  deleteManyBeers(where: BeerWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  createVote(data: VoteCreateInput!): Vote!
  updateVote(data: VoteUpdateInput!, where: VoteWhereUniqueInput!): Vote
  upsertVote(where: VoteWhereUniqueInput!, create: VoteCreateInput!, update: VoteUpdateInput!): Vote!
  deleteVote(where: VoteWhereUniqueInput!): Vote
  deleteManyVotes(where: VoteWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  beer(where: BeerWhereUniqueInput!): Beer
  beers(where: BeerWhereInput, orderBy: BeerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Beer]!
  beersConnection(where: BeerWhereInput, orderBy: BeerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BeerConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  vote(where: VoteWhereUniqueInput!): Vote
  votes(where: VoteWhereInput, orderBy: VoteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Vote]!
  votesConnection(where: VoteWhereInput, orderBy: VoteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): VoteConnection!
  node(id: ID!): Node
}

type Subscription {
  beer(where: BeerSubscriptionWhereInput): BeerSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  vote(where: VoteSubscriptionWhereInput): VoteSubscriptionPayload
}

type User {
  id: ID!
  name: String!
  email: String!
  password: String!
  beers(where: BeerWhereInput, orderBy: BeerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Beer!]
  votes(where: VoteWhereInput, orderBy: VoteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Vote!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  name: String!
  email: String!
  password: String!
  beers: BeerCreateManyWithoutPostedByInput
  votes: VoteCreateManyWithoutUserInput
}

input UserCreateOneWithoutBeersInput {
  create: UserCreateWithoutBeersInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutVotesInput {
  create: UserCreateWithoutVotesInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutBeersInput {
  id: ID
  name: String!
  email: String!
  password: String!
  votes: VoteCreateManyWithoutUserInput
}

input UserCreateWithoutVotesInput {
  id: ID
  name: String!
  email: String!
  password: String!
  beers: BeerCreateManyWithoutPostedByInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
  email: String!
  password: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  name: String
  email: String
  password: String
  beers: BeerUpdateManyWithoutPostedByInput
  votes: VoteUpdateManyWithoutUserInput
}

input UserUpdateManyMutationInput {
  name: String
  email: String
  password: String
}

input UserUpdateOneRequiredWithoutVotesInput {
  create: UserCreateWithoutVotesInput
  update: UserUpdateWithoutVotesDataInput
  upsert: UserUpsertWithoutVotesInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneWithoutBeersInput {
  create: UserCreateWithoutBeersInput
  update: UserUpdateWithoutBeersDataInput
  upsert: UserUpsertWithoutBeersInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutBeersDataInput {
  name: String
  email: String
  password: String
  votes: VoteUpdateManyWithoutUserInput
}

input UserUpdateWithoutVotesDataInput {
  name: String
  email: String
  password: String
  beers: BeerUpdateManyWithoutPostedByInput
}

input UserUpsertWithoutBeersInput {
  update: UserUpdateWithoutBeersDataInput!
  create: UserCreateWithoutBeersInput!
}

input UserUpsertWithoutVotesInput {
  update: UserUpdateWithoutVotesDataInput!
  create: UserCreateWithoutVotesInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  beers_every: BeerWhereInput
  beers_some: BeerWhereInput
  beers_none: BeerWhereInput
  votes_every: VoteWhereInput
  votes_some: VoteWhereInput
  votes_none: VoteWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}

type Vote {
  id: ID!
  beer: Beer!
  user: User!
}

type VoteConnection {
  pageInfo: PageInfo!
  edges: [VoteEdge]!
  aggregate: AggregateVote!
}

input VoteCreateInput {
  id: ID
  beer: BeerCreateOneWithoutVotesInput!
  user: UserCreateOneWithoutVotesInput!
}

input VoteCreateManyWithoutBeerInput {
  create: [VoteCreateWithoutBeerInput!]
  connect: [VoteWhereUniqueInput!]
}

input VoteCreateManyWithoutUserInput {
  create: [VoteCreateWithoutUserInput!]
  connect: [VoteWhereUniqueInput!]
}

input VoteCreateWithoutBeerInput {
  id: ID
  user: UserCreateOneWithoutVotesInput!
}

input VoteCreateWithoutUserInput {
  id: ID
  beer: BeerCreateOneWithoutVotesInput!
}

type VoteEdge {
  node: Vote!
  cursor: String!
}

enum VoteOrderByInput {
  id_ASC
  id_DESC
}

type VotePreviousValues {
  id: ID!
}

input VoteScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  AND: [VoteScalarWhereInput!]
  OR: [VoteScalarWhereInput!]
  NOT: [VoteScalarWhereInput!]
}

type VoteSubscriptionPayload {
  mutation: MutationType!
  node: Vote
  updatedFields: [String!]
  previousValues: VotePreviousValues
}

input VoteSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: VoteWhereInput
  AND: [VoteSubscriptionWhereInput!]
  OR: [VoteSubscriptionWhereInput!]
  NOT: [VoteSubscriptionWhereInput!]
}

input VoteUpdateInput {
  beer: BeerUpdateOneRequiredWithoutVotesInput
  user: UserUpdateOneRequiredWithoutVotesInput
}

input VoteUpdateManyWithoutBeerInput {
  create: [VoteCreateWithoutBeerInput!]
  delete: [VoteWhereUniqueInput!]
  connect: [VoteWhereUniqueInput!]
  set: [VoteWhereUniqueInput!]
  disconnect: [VoteWhereUniqueInput!]
  update: [VoteUpdateWithWhereUniqueWithoutBeerInput!]
  upsert: [VoteUpsertWithWhereUniqueWithoutBeerInput!]
  deleteMany: [VoteScalarWhereInput!]
}

input VoteUpdateManyWithoutUserInput {
  create: [VoteCreateWithoutUserInput!]
  delete: [VoteWhereUniqueInput!]
  connect: [VoteWhereUniqueInput!]
  set: [VoteWhereUniqueInput!]
  disconnect: [VoteWhereUniqueInput!]
  update: [VoteUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [VoteUpsertWithWhereUniqueWithoutUserInput!]
  deleteMany: [VoteScalarWhereInput!]
}

input VoteUpdateWithoutBeerDataInput {
  user: UserUpdateOneRequiredWithoutVotesInput
}

input VoteUpdateWithoutUserDataInput {
  beer: BeerUpdateOneRequiredWithoutVotesInput
}

input VoteUpdateWithWhereUniqueWithoutBeerInput {
  where: VoteWhereUniqueInput!
  data: VoteUpdateWithoutBeerDataInput!
}

input VoteUpdateWithWhereUniqueWithoutUserInput {
  where: VoteWhereUniqueInput!
  data: VoteUpdateWithoutUserDataInput!
}

input VoteUpsertWithWhereUniqueWithoutBeerInput {
  where: VoteWhereUniqueInput!
  update: VoteUpdateWithoutBeerDataInput!
  create: VoteCreateWithoutBeerInput!
}

input VoteUpsertWithWhereUniqueWithoutUserInput {
  where: VoteWhereUniqueInput!
  update: VoteUpdateWithoutUserDataInput!
  create: VoteCreateWithoutUserInput!
}

input VoteWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  beer: BeerWhereInput
  user: UserWhereInput
  AND: [VoteWhereInput!]
  OR: [VoteWhereInput!]
  NOT: [VoteWhereInput!]
}

input VoteWhereUniqueInput {
  id: ID
}
`
      }
    