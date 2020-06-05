import cors from 'cors';
import express from 'express';

import debug from '@utils/debug';

import connectDatabase from '../typeorm';
import debugRequestMiddleware from './middlewares/debug-request';
import registerRoutes from './routes';

class App {
  public readonly server: express.Express;

  constructor() {
    this.server = express();
    this.bootstrap();
  }

  private async bootstrap(): Promise<void> {
    debug('app', 'Bootstraping application');

    this.middlewares();
    await this.routes();
  }

  middlewares(): void {
    debug('app', 'Configure middlewares');

    this.server.use(cors());
    this.server.use(express.json());
    this.server.use(express.urlencoded({ extended: false }));
    this.server.use(debugRequestMiddleware);
  }

  routes(): Promise<void> {
    return registerRoutes(this.server).then(() => {
      debug('app:routes', 'Routes registered');
    });
  }

  async start(port: number): Promise<void> {
    await connectDatabase();
    this.server.listen(port, () => {
      debug('server', '⚡️ Server is running on port %d', port);
    });
  }
}

export default new App();
