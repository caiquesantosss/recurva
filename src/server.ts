import { fastify } from 'fastify'
import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from 'fastify-type-provider-zod'
import { fastifyCors } from '@fastify/cors'
import { env } from './env.ts'
import { getClientsRoute } from './routes/clients/get-clients.ts'
import { createUsersRoute } from './routes/users/create-user.ts'

const app = fastify().withTypeProvider<ZodTypeProvider>()

app.register(fastifyCors, {
  origin: '*',
})

app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)

// Health
app.get('/health', () => {
  return 'live'
})

// GET
app.register(getClientsRoute)

// POST
app.register(createUsersRoute)

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('Server Running!')
  })
