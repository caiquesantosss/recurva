import { bigint, numeric, pgTable, text, timestamp, uuid, varchar } from 'drizzle-orm/pg-core'

export const client = pgTable('client', {
  id: uuid('id').primaryKey().defaultRandom(),
  fullname: text('username').notNull(),
  cpf: varchar('cpf', { length: 14 }).notNull(),
  rg: varchar('rg', { length: 13 }).notNull(),
  phoneNumber: varchar('phone', { length: 18 }).notNull(),
  secondPhone: varchar('second_phone', { length: 18 }),
  role: text('role').default('client'),
  createdAt: timestamp('created_at').defaultNow(),
})
