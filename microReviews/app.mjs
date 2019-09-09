import express from 'express';

const PORT = process.env.PORT || 3000;

const app = express();

app.get('/', (req, res) => {
  return res.json([
    {
      _id: 4,
      title: 'Oh snap what an ending',
      grade: 5,
      comment: 'I need therapy after this...',
      product: 1
    },
    {
      _id: 4,
      title: 'Oh well..',
      grade: 5,
      comment: 'Awesome movie...',
      product: 2
    },
    {
      _id: 4,
      title: 'Is this the end?',
      grade: 5,
      comment: 'WTF',
      product: 1
    }
  ]);
});

app.listen(PORT, () =>
  console.log(`microReview running at http://localhost:${PORT}`)
);
