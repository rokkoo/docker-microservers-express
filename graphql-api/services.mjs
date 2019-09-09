import fetch from 'node-fetch';

export const getProducts = async () => {
  const res = await fetch(process.env.PRODUCTS_URL);
  const json = res.json();
  return json;
};

export const getReviews = async () => {
  const res = await fetch(process.env.REVIEW_URL);
  const json = res.json();
  return json;
};
