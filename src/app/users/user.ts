export interface User {
  id: number;
  firstName: string;
  lastName: string;
}

/**
 * Returns a new User with updated fields.
 *
 * @param user - user to update
 * @param fields - fields to update user with
 * @returns new User object
 */
export function updateUser(user: User, fields: Partial<User>): User {
  // implement me
  return user;
}
