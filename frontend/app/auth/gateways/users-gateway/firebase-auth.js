export const createFirebaseAuthUsersGateway = ({ firebaseAuth }) => ({
  async signInWithEmailAndPassword({ email, password }) {
    const userCredentials = await firebaseAuth.signInWithEmailAndPassword(email, password);
    const token = await userCredentials.user.getIdToken();

    return {
      id: userCredentials.user.uid,
      email,
      token,
    };
  },
});
