import { createClient } from 'next-sanity'



export const client = createClient({
  projectId:"p60f51ip",
  dataset: "production",
  apiVersion: "2025-01-18",
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
