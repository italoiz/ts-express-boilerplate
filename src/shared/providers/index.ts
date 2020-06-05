import glob from 'glob';

import debug from '@utils/debug';

const providers = [
  'src/shared/providers/*/index.ts',
  'src/modules/**/providers/*/index.ts',
]
  .map(pattern => glob.sync(pattern))
  .reduce((acc, arr) => acc.concat(arr), []);

const registerProviders = async (): Promise<void> => {
  debug('providers', 'Registering providers');
  debug('providers', 'Found %d provider(s) to register', providers.length);

  if (!providers.length) return;

  const modules = providers
    .map(modulePath => modulePath.replace('src/', '@app/'))
    .map(modulePath =>
      import(modulePath).then(() => {
        debug('providers', 'Provider "%s" registered', modulePath);
      }),
    );

  await Promise.all(modules);
};

export default registerProviders;
