
import { PrismaNeon } from '@prisma/adapter-neon';
import 'dotenv/config'
import { PrismaClient } from './generated/prisma/client';


const adapter = new PrismaNeon({
  connectionString: process.env.DATABASE_URL,
})

const db = new PrismaClient({
  adapter,
});

export {db}