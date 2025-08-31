import type { FastifyPluginCallbackZod } from 'fastify-type-provider-zod'
import z from 'zod'
import { db } from '../../db/connection.ts'
import { users } from '../../db/schema/users.ts'

export const createUsersRoute: FastifyPluginCallbackZod = (app, _, done) => {
  app.post(
    '/users',
    {
      schema: {
        body: z.object({
          username: z.string().min(3),
          password: z.string().min(3),
          role: z.string().min(3),
        }),
      },
    },
    async (request, response) => {
      const { username, password, role } = request.body

      const [newUser] = await db
        .insert(users)
        .values({
          username,
          password,
          role,
        })
        .returning()

        return response.status(201).send(newUser)
    }
  )

  done()
}
