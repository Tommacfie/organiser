import express from 'express';

import { PORT } from './config';

const app = express();

app
  .listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(
      `Server started  at ${new Date()} and running at https://localhost:${PORT}`
    );
  })
  .on('error', (error) => {
    // eslint-disable-next-line no-console
    console.log(error.message);
  });
