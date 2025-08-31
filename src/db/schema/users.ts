import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core'

export const users = pgTable('users', {
  id: uuid('id').primaryKey().defaultRandom(),
  username: text('username').notNull(),
  password: text('password').notNull(),
  role: text('role').notNull().default('attendant'), 
  createdAt: timestamp('created_at').defaultNow(),
})
