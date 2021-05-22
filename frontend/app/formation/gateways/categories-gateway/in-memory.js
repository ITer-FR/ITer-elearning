export const createInMemoryCategoriesGateway = ({ categories = [] } = {}) => ({
  async getAll() {
    return [...categories];
  },
});
