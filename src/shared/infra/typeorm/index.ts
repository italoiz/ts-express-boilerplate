import { createConnections, Connection } from 'typeorm';

import debug from '@utils/debug';

export default (): Promise<Connection[]> => {
  debug('database', 'Connecting');
  return createConnections().then(connections => {
    debug('database', 'Connected');
    return connections;
  });
};
