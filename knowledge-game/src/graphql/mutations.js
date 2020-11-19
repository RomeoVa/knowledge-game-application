/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSeason = /* GraphQL */ `
  mutation CreateSeason(
    $input: CreateSeasonInput!
    $condition: ModelSeasonConditionInput
  ) {
    createSeason(input: $input, condition: $condition) {
      id
      title
      totalUsers
      duration
      disabled
      users {
        items {
          id
          seasonID
          userID
          score
          createdAt
          updatedAt
        }
        nextToken
      }
      createdOn
      updatedAt
    }
  }
`;
export const updateSeason = /* GraphQL */ `
  mutation UpdateSeason(
    $input: UpdateSeasonInput!
    $condition: ModelSeasonConditionInput
  ) {
    updateSeason(input: $input, condition: $condition) {
      id
      title
      totalUsers
      duration
      disabled
      users {
        items {
          id
          seasonID
          userID
          score
          createdAt
          updatedAt
        }
        nextToken
      }
      createdOn
      updatedAt
    }
  }
`;
export const deleteSeason = /* GraphQL */ `
  mutation DeleteSeason(
    $input: DeleteSeasonInput!
    $condition: ModelSeasonConditionInput
  ) {
    deleteSeason(input: $input, condition: $condition) {
      id
      title
      totalUsers
      duration
      disabled
      users {
        items {
          id
          seasonID
          userID
          score
          createdAt
          updatedAt
        }
        nextToken
      }
      createdOn
      updatedAt
    }
  }
`;
export const createUserSeason = /* GraphQL */ `
  mutation CreateUserSeason(
    $input: CreateUserSeasonInput!
    $condition: ModelUserSeasonConditionInput
  ) {
    createUserSeason(input: $input, condition: $condition) {
      id
      seasonID
      userID
      season {
        id
        title
        totalUsers
        duration
        disabled
        users {
          nextToken
        }
        createdOn
        updatedAt
      }
      user {
        id
        username
        seasons {
          nextToken
        }
        createdAt
        updatedAt
      }
      score
      createdAt
      updatedAt
    }
  }
`;
export const updateUserSeason = /* GraphQL */ `
  mutation UpdateUserSeason(
    $input: UpdateUserSeasonInput!
    $condition: ModelUserSeasonConditionInput
  ) {
    updateUserSeason(input: $input, condition: $condition) {
      id
      seasonID
      userID
      season {
        id
        title
        totalUsers
        duration
        disabled
        users {
          nextToken
        }
        createdOn
        updatedAt
      }
      user {
        id
        username
        seasons {
          nextToken
        }
        createdAt
        updatedAt
      }
      score
      createdAt
      updatedAt
    }
  }
`;
export const deleteUserSeason = /* GraphQL */ `
  mutation DeleteUserSeason(
    $input: DeleteUserSeasonInput!
    $condition: ModelUserSeasonConditionInput
  ) {
    deleteUserSeason(input: $input, condition: $condition) {
      id
      seasonID
      userID
      season {
        id
        title
        totalUsers
        duration
        disabled
        users {
          nextToken
        }
        createdOn
        updatedAt
      }
      user {
        id
        username
        seasons {
          nextToken
        }
        createdAt
        updatedAt
      }
      score
      createdAt
      updatedAt
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      username
      seasons {
        items {
          id
          seasonID
          userID
          score
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      username
      seasons {
        items {
          id
          seasonID
          userID
          score
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      username
      seasons {
        items {
          id
          seasonID
          userID
          score
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createQuestion = /* GraphQL */ `
  mutation CreateQuestion(
    $input: CreateQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    createQuestion(input: $input, condition: $condition) {
      id
      label
      category
      correct
      answers {
        id
        label
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateQuestion = /* GraphQL */ `
  mutation UpdateQuestion(
    $input: UpdateQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    updateQuestion(input: $input, condition: $condition) {
      id
      label
      category
      correct
      answers {
        id
        label
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteQuestion = /* GraphQL */ `
  mutation DeleteQuestion(
    $input: DeleteQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    deleteQuestion(input: $input, condition: $condition) {
      id
      label
      category
      correct
      answers {
        id
        label
      }
      createdAt
      updatedAt
    }
  }
`;
