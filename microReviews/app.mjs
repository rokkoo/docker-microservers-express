import express from 'express';

const PORT = process.env.PORT || 3000;

const app = express();

app.get('/', (req, res) => {
  return res.json([
    {
      id: '2',
      title: 'Oh snap what an ending',
      grade: 5,
      comment: 'I need therapy after this...',
      product: 1
    }
  ]);
});

app.listen(PORT, () =>
  console.log(`microReview running at http://localhost:${PORT}`)
);
