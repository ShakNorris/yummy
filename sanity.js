import { createClient } from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url'

const client = createClient({
    projectId: "gx3ve939",
    dataset: "production",
    useCdn: true,
    // api version is optional
})

const builder = imageUrlBuilder(client)
export const urlFor = (source) => builder.image(source); //helper function

// Run this to add exception for localhost 3000 CORS policy
// sanity cors add https://localhost:3000

export default client;