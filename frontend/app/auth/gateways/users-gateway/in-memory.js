export const createInMemoryUsersGateway = ({ existingUsers = {} }) => {
  return {
    async signInWithEmailAndPassword({ email }) {
      return existingUsers[email];
    },
  };
};
