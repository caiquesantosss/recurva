import { reset, seed } from 'drizzle-seed'
import { db, sql } from './connection.ts'
import { schema } from './schema/index.ts'

await reset(db, schema)

await seed(db, schema).refine((f) => {
  return {
    users: {
      count: 10,
      columns: {
        username: f.fullName(),
        password: f.string(),
        role: f.default({ defaultValue: 'attendant' }),
      },
    },
  }
})

await sql.end()

console.log('Database seeded!')
