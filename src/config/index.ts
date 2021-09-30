import * as env from 'dotenv';
import { join } from 'path';

const { error } = env.config({ path: join(__dirname, '../../.env') });

if (error) {
  throw error;
}

const config = {
  port: process.env.PORT,
  pg_database: process.env.POSTGRES_DATABASE,
  pg_password: process.env.POSTGRES_PASSWORD,
  pg_user: process.env.POSTGRES_USER,
  pg_port: process.env.POSTGRES_PORT,
};

export default config;
