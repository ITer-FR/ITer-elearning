export const createInMemoryFormationRepository = ({ initialData = [] }) => {
  const formations = [...initialData];
  return {
    async getAll() {
      return formations;
    },
  };
};
