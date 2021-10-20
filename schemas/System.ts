import { text } from '@keystone-next/fields'
import { list } from '@keystone-next/keystone/schema'

const System = list({
  // TODO: access
  fields: {
    name: text(),
  },
})

export default System
