import cors from 'cors';
import express from 'express';

import debug from '@utils/debug';

import connectDatabase from '../typeorm';
import debugRequestMiddleware from './middlewares/debug-request';
import routes from './routes';

class App {
  server: express.Express;

  constructor() {
    this.bootstrap();
  }

  private async bootstrap(): Promise<void> {
    this.server = express();

    debug('app', 'Bootstraping application');

    this.middlewares();
    this.routes();
  }

  middlewares(): void {
    debug('app', 'Configure middlewares');

    this.server.use(cors());
    this.server.use(express.json());
    this.server.use(express.urlencoded({ extended: false }));
    this.server.use(debugRequestMiddleware);
  }

  routes(): void {
    debug('app', 'Configure routing');

    this.server.use(routes);
  }

  async start(port: number): Promise<void> {
    await connectDatabase();
    this.server.listen(port, () => {
      debug('server', '⚡️ Server is running on port %d', port);
    });
  }
}

export default App;
