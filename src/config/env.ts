import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

const { NODE_ENV } = process.env;

const envPath = path.resolve(__dirname, `../../.env.${NODE_ENV}`);

dotenv.config({
  path: fs.existsSync(envPath)
    ? envPath
    : path.resolve(__dirname, '../../.env'),
});
