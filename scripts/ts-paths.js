const fs = require('fs');
const path = require('path');

const mainTsconfig = require('../tsconfig.json');

function createFile(filename, content) {
  const dirname = path.dirname(filename);

  if (!fs.existsSync(dirname)) {
    fs.mkdirSync(dirname);
  }

  return fs.writeFile(filename, content, function (err) {
    if (err) throw err;
  });
}

function pathMapper(paths) {
  return Object.keys(paths).reduce((acc, pathKey) => {
    const pathValue = paths[pathKey] || [];

    const value = pathValue.map(aliasPath => {
      return aliasPath.replace(/^src\//i, './');
    });

    acc[pathKey] = value;
    return acc;
  }, {});
}

const tsconfig = {
  ...mainTsconfig,
  compilerOptions: {
    ...mainTsconfig.compilerOptions,
    baseUrl: './',
    outDir: './',
    rootDir: './',
    paths: pathMapper(mainTsconfig.compilerOptions.paths),
  },
};

createFile(
  path.join(__dirname, '..', 'dist', 'tsconfig.json'),
  JSON.stringify(tsconfig),
);
