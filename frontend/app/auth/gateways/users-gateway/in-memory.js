export const createInMemoryUsersGateway = ({ existingUsers = {}, nextUserId = null, nextUserToken = null } = {}) => {
  const users = { ...existingUsers };
  return {
    async signInWithEmailAndPassword({ email }) {
      const { password: _, ...user } = users[email];
      return user;
    },
    async createUserWithEmailAndPassword({ email, password }) {
      const user = {
        email,
        id: nextUserId,
        token: nextUserToken,
      };
      users[email] = {
        ...user,
        password,
      };
    },
  };
};
