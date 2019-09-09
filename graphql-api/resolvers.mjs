import { getProducts, getReviews } from './services.mjs';

const resolvers = {
  Query: {
    product: async (parent, { id }) => {
      let products = await getProducts();
      console.log(products);
      console.log(typeof id);

      return products.filter(product => product._id === id);
    }
  },
  Product: {
    reviews: async ({ id }, args) => {
      let reviews = await getReviews();
      console.log(reviews);
      return reviews.filter(review => review.product == 1);
    }
  }
};

export default resolvers;
