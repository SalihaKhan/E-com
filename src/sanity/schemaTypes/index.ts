import { type SchemaTypeDefinition } from 'sanity'
import { productSchema } from './products'
import { categorySchema } from './categories'
import { popularproductsSchema } from './popularproducts'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productSchema, categorySchema,popularproductsSchema],
}
