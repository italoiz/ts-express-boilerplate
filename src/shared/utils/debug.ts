import debug from 'debug';

export default (prefix: string, formatter: any, ...args: any[]): void => {
  let fn: debug.Debugger;

  const debugPrefix = process.env.DEBUG_PREFIX;

  if (typeof prefix !== 'undefined' && prefix !== debugPrefix) {
    fn = debug(`${debugPrefix}:${prefix}`);
  } else {
    fn = debug(`${debugPrefix}`);
  }

  fn(formatter, ...args);
};
