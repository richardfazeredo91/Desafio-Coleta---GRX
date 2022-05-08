const express = require('express');

const app = express();
app.use(express.json());

const PORT = '3000';

const formDataRouter = require('./routes/formDataRouter');

app.use('/add', formDataRouter);

app.get('/', (_request, response) => {
  response.send();
});

app.listen(PORT, () => {
  console.log(`Online on port ${PORT}`);
});
