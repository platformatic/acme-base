import service from '@platformatic/service'
import esMain from 'es-main'

const { schema: baseSchema } = service.schema

export const schema = structuredClone(baseSchema)

schema.$id = 'https://platformatic.dev/acme-base/schemas/1.json'
schema.title = 'Acme Base'

// Needed to allow module loading
schema.properties.module = {
  type: 'string'
}

schema.properties.dynamite = {
  anyOf: [{
    type: 'boolean'
  }, {
    type: 'string'
  }],
  description: 'Enable /dynamite route'
}

delete schema.properties.plugins

if (esMain(import.meta)) {
  console.log(JSON.stringify(schema, null, 2))
}
