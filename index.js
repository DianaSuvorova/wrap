import { fetch } from 'cross-fetch';
import { print, buildSchema } from 'graphql';
import { wrapSchema } from '@graphql-tools/wrap';
import gql from 'graphql-tag';

const typeDefs = `
#
type Query {
  # Get a user by id
  user(
    # The id of the user
    id: String
  ): User

  # Get all users
  users: [User]

  # Get all todos
  todos: [Todo]
}

#
input UpdateTodoInput {
  #
  id: String

  #
  description: String

  #
  done: Boolean
}

#
type User {
  #
  id: String

  #
  name: String

  #
  email: String

  #
  todos: [Todo]
}

#
type Todo {
  #
  id: String

  #
  description: String

  #
  done: Boolean
}

#
type Mutation {
  #
  updateTodo(
    # Todo input
    input: UpdateTodoInput!
  ): Todo
}
`;

const executor = async ({ document, variables }) => {
  const query = print(document);
  const fetchResult = await fetch('https://api.mocki.io/v2/c4d7a195/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query, variables }),
  });
  return fetchResult.json();
};



export default wrapSchema({
    schema: buildSchema(typeDefs),
    executor,
});








