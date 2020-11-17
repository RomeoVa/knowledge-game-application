/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSeason = /* GraphQL */ `
  subscription OnCreateSeason {
    onCreateSeason {
      id
      title
      totalUsers
      duration
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
export const onUpdateSeason = /* GraphQL */ `
  subscription OnUpdateSeason {
    onUpdateSeason {
      id
      title
      totalUsers
      duration
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
export const onDeleteSeason = /* GraphQL */ `
  subscription OnDeleteSeason {
    onDeleteSeason {
      id
      title
      totalUsers
      duration
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
export const onCreateUserSeason = /* GraphQL */ `
  subscription OnCreateUserSeason {
    onCreateUserSeason {
      id
      seasonID
      userID
      season {
        id
        title
        totalUsers
        duration
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
export const onUpdateUserSeason = /* GraphQL */ `
  subscription OnUpdateUserSeason {
    onUpdateUserSeason {
      id
      seasonID
      userID
      season {
        id
        title
        totalUsers
        duration
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
export const onDeleteUserSeason = /* GraphQL */ `
  subscription OnDeleteUserSeason {
    onDeleteUserSeason {
      id
      seasonID
      userID
      season {
        id
        title
        totalUsers
        duration
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateQuestion = /* GraphQL */ `
  subscription OnCreateQuestion {
    onCreateQuestion {
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
export const onUpdateQuestion = /* GraphQL */ `
  subscription OnUpdateQuestion {
    onUpdateQuestion {
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
export const onDeleteQuestion = /* GraphQL */ `
  subscription OnDeleteQuestion {
    onDeleteQuestion {
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
