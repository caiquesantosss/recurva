import type { FastifyPluginCallbackZod } from 'fastify-type-provider-zod'
import { db } from '../../db/connection.ts'
import { schema } from '../../db/schema/index.ts'

export const getClientsRoute: FastifyPluginCallbackZod = (app) => {
  app.get('/clients', async () => {
    const result = await db
      .select()
      .from(schema.client)
      .orderBy(schema.client.createdAt)

    return result
  })
}
