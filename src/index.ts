import { factory, primaryKey } from '@mswjs/data'
import { components } from './schema.js'
import { setupWorker } from 'msw/browser'

const db = factory({
  todo: {
    id: primaryKey(() => crypto.randomUUID()),
    text: String,
    isDone: Boolean,
  } satisfies { [key in keyof components['schemas']['TodoJson']]: any },
})

const handlers = [...db.todo.toHandlers('rest')]
export const worker = setupWorker(...handlers)
