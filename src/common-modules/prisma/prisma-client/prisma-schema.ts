// Code generated by Prisma (prisma@1.27.3). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

export const typeDefs = /* GraphQL */ `type AggregateTodo {
  count: Int!
}

type AggregateTodoAction {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar Long

type Mutation {
  createTodo(data: TodoCreateInput!): Todo!
  updateTodo(data: TodoUpdateInput!, where: TodoWhereUniqueInput!): Todo
  updateManyTodoes(data: TodoUpdateManyMutationInput!, where: TodoWhereInput): BatchPayload!
  upsertTodo(where: TodoWhereUniqueInput!, create: TodoCreateInput!, update: TodoUpdateInput!): Todo!
  deleteTodo(where: TodoWhereUniqueInput!): Todo
  deleteManyTodoes(where: TodoWhereInput): BatchPayload!
  createTodoAction(data: TodoActionCreateInput!): TodoAction!
  updateTodoAction(data: TodoActionUpdateInput!, where: TodoActionWhereUniqueInput!): TodoAction
  updateManyTodoActions(data: TodoActionUpdateManyMutationInput!, where: TodoActionWhereInput): BatchPayload!
  upsertTodoAction(where: TodoActionWhereUniqueInput!, create: TodoActionCreateInput!, update: TodoActionUpdateInput!): TodoAction!
  deleteTodoAction(where: TodoActionWhereUniqueInput!): TodoAction
  deleteManyTodoActions(where: TodoActionWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
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
  todo(where: TodoWhereUniqueInput!): Todo
  todoes(where: TodoWhereInput, orderBy: TodoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Todo]!
  todoesConnection(where: TodoWhereInput, orderBy: TodoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TodoConnection!
  todoAction(where: TodoActionWhereUniqueInput!): TodoAction
  todoActions(where: TodoActionWhereInput, orderBy: TodoActionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [TodoAction]!
  todoActionsConnection(where: TodoActionWhereInput, orderBy: TodoActionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TodoActionConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  todo(where: TodoSubscriptionWhereInput): TodoSubscriptionPayload
  todoAction(where: TodoActionSubscriptionWhereInput): TodoActionSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type Todo {
  id: ID!
  content: String!
  completed: Boolean!
}

type TodoAction {
  id: ID!
  type: String!
  context: String
}

type TodoActionConnection {
  pageInfo: PageInfo!
  edges: [TodoActionEdge]!
  aggregate: AggregateTodoAction!
}

input TodoActionCreateInput {
  type: String!
  context: String
}

type TodoActionEdge {
  node: TodoAction!
  cursor: String!
}

enum TodoActionOrderByInput {
  id_ASC
  id_DESC
  type_ASC
  type_DESC
  context_ASC
  context_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type TodoActionPreviousValues {
  id: ID!
  type: String!
  context: String
}

type TodoActionSubscriptionPayload {
  mutation: MutationType!
  node: TodoAction
  updatedFields: [String!]
  previousValues: TodoActionPreviousValues
}

input TodoActionSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TodoActionWhereInput
  AND: [TodoActionSubscriptionWhereInput!]
  OR: [TodoActionSubscriptionWhereInput!]
  NOT: [TodoActionSubscriptionWhereInput!]
}

input TodoActionUpdateInput {
  type: String
  context: String
}

input TodoActionUpdateManyMutationInput {
  type: String
  context: String
}

input TodoActionWhereInput {
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
  type: String
  type_not: String
  type_in: [String!]
  type_not_in: [String!]
  type_lt: String
  type_lte: String
  type_gt: String
  type_gte: String
  type_contains: String
  type_not_contains: String
  type_starts_with: String
  type_not_starts_with: String
  type_ends_with: String
  type_not_ends_with: String
  context: String
  context_not: String
  context_in: [String!]
  context_not_in: [String!]
  context_lt: String
  context_lte: String
  context_gt: String
  context_gte: String
  context_contains: String
  context_not_contains: String
  context_starts_with: String
  context_not_starts_with: String
  context_ends_with: String
  context_not_ends_with: String
  AND: [TodoActionWhereInput!]
  OR: [TodoActionWhereInput!]
  NOT: [TodoActionWhereInput!]
}

input TodoActionWhereUniqueInput {
  id: ID
}

type TodoConnection {
  pageInfo: PageInfo!
  edges: [TodoEdge]!
  aggregate: AggregateTodo!
}

input TodoCreateInput {
  content: String!
  completed: Boolean!
}

type TodoEdge {
  node: Todo!
  cursor: String!
}

enum TodoOrderByInput {
  id_ASC
  id_DESC
  content_ASC
  content_DESC
  completed_ASC
  completed_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type TodoPreviousValues {
  id: ID!
  content: String!
  completed: Boolean!
}

type TodoSubscriptionPayload {
  mutation: MutationType!
  node: Todo
  updatedFields: [String!]
  previousValues: TodoPreviousValues
}

input TodoSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TodoWhereInput
  AND: [TodoSubscriptionWhereInput!]
  OR: [TodoSubscriptionWhereInput!]
  NOT: [TodoSubscriptionWhereInput!]
}

input TodoUpdateInput {
  content: String
  completed: Boolean
}

input TodoUpdateManyMutationInput {
  content: String
  completed: Boolean
}

input TodoWhereInput {
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
  content: String
  content_not: String
  content_in: [String!]
  content_not_in: [String!]
  content_lt: String
  content_lte: String
  content_gt: String
  content_gte: String
  content_contains: String
  content_not_contains: String
  content_starts_with: String
  content_not_starts_with: String
  content_ends_with: String
  content_not_ends_with: String
  completed: Boolean
  completed_not: Boolean
  AND: [TodoWhereInput!]
  OR: [TodoWhereInput!]
  NOT: [TodoWhereInput!]
}

input TodoWhereUniqueInput {
  id: ID
}

type User {
  id: ID!
  email: String!
  firstName: String!
  lastName: String!
  passwordDigest: String!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  email: String!
  firstName: String!
  lastName: String!
  passwordDigest: String!
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  firstName_ASC
  firstName_DESC
  lastName_ASC
  lastName_DESC
  passwordDigest_ASC
  passwordDigest_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  email: String!
  firstName: String!
  lastName: String!
  passwordDigest: String!
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
  email: String
  firstName: String
  lastName: String
  passwordDigest: String
}

input UserUpdateManyMutationInput {
  email: String
  firstName: String
  lastName: String
  passwordDigest: String
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
  firstName: String
  firstName_not: String
  firstName_in: [String!]
  firstName_not_in: [String!]
  firstName_lt: String
  firstName_lte: String
  firstName_gt: String
  firstName_gte: String
  firstName_contains: String
  firstName_not_contains: String
  firstName_starts_with: String
  firstName_not_starts_with: String
  firstName_ends_with: String
  firstName_not_ends_with: String
  lastName: String
  lastName_not: String
  lastName_in: [String!]
  lastName_not_in: [String!]
  lastName_lt: String
  lastName_lte: String
  lastName_gt: String
  lastName_gte: String
  lastName_contains: String
  lastName_not_contains: String
  lastName_starts_with: String
  lastName_not_starts_with: String
  lastName_ends_with: String
  lastName_not_ends_with: String
  passwordDigest: String
  passwordDigest_not: String
  passwordDigest_in: [String!]
  passwordDigest_not_in: [String!]
  passwordDigest_lt: String
  passwordDigest_lte: String
  passwordDigest_gt: String
  passwordDigest_gte: String
  passwordDigest_contains: String
  passwordDigest_not_contains: String
  passwordDigest_starts_with: String
  passwordDigest_not_starts_with: String
  passwordDigest_ends_with: String
  passwordDigest_not_ends_with: String
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`