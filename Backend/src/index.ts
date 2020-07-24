const expess = require('express');
const mongoose = require('mongoose');

import { Request, Response } from 'express';

const PORT = process.env.BACKEND_PORT || 8080;
const app = expess();

app.get('*', (req: Request, res: Response) => {
  res.send(req.url);
})

function start() {
  try {
    const dbConnection = mongoose.connect(`mongodb://${process.env.MONGO_ADDR}:27017/${process.env.DB_NAME}`, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    }).then(() => {
      app.listen(PORT, () => {
        console.log(`Backend started at port ${PORT}!`);
      });
    });
  } catch (e) {
    console.log(e);
  }
}


start();