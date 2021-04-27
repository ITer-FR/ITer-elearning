export const createInMemoryLatenceFormationRepository = ({ initialData = [] }) => {
  const formations = [...initialData];
  return {
    async getAll() {
      return new Promise((resolve) =>
        setTimeout(() => {
          resolve(formations);
        }, 500)
      );
    },
  };
};
