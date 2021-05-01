export const createInMemoryCategoryRepository = ({ initialData = [] }) => {
    const categories = [...initialData];
    return {
      async getAll() {
        return categories;
      },
    };
  };
