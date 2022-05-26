import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: process.env.SANITY_STUDIO_PROJECT_ID,
  dataset: process.env.SANITY_STUDIO_DATASET,
  apiVersion: "v2021-10-21",
  token: process.env.SANITY_STUDIO_TOKEN,
  useCdn: true,
});
