import express from 'express';

const PORT = process.env.PORT || 3000;

const app = express();

app.get('/', (req, res) => {
  return res.json([
    {
      _id: 1,
      name: 'Avengers - infinity war',
      description: 'a Blue ray movie'
    }
  ]);
});

app.listen(PORT, () =>
  console.log(`microProduc running at http://localhost:${PORT}`)
);
