import '@shared/providers';
import '@config/env';

import debug from '@utils/debug';

import app from './app';

const PORT: number = Number(process.env.PORT) || 3333;

app.listen(PORT, () => {
  debug('server', '⚡️ Server is running on port %d', PORT);
});
