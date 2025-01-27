import { defineType } from "sanity";

export const popularproductsSchema = defineType({
    name: 'popular',
    title: 'Popular Products ',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Product Title',
            type: 'string',
        },
        {
            name: 'image',
            title: 'Product Image',
            type: 'image',
        },
        {
            title: 'Price',
            name: 'price',
            type: 'number',
        }
    ],
});