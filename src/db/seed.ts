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
        role: f.valuesFromArray({
          values: [
            "admin",
            "attendant",
            "attendant",
            "attendant",
            "attendant",
            "attendant",
            "attendant",
            "attendant",
            "attendant",
            "attendant",
          ],
        }),
      },
    },

    client: {
      count: 10,
      columns: {
        fullname: f.fullName(),
        cpf: f.int({ minValue: 10000000000, maxValue: 99999999999 }),
        rg: f.int({ minValue: 100000000, maxValue: 999999999 }),
        phoneNumber: f.phoneNumber(),
        secondPhone: f.phoneNumber(),
        role: f.default({ defaultValue: "client" }),
      },
    },
  }
})

await sql.end()

console.log('Database seeded!')
