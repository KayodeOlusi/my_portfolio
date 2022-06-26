import sanityClient from "@sanity/client";
import imageBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2022-02-01",
  token: process.env.REACT_APP_SANITY_TOKEN,
  useCdn: true,
});

const builder = imageBuilder(client);

export const urlFor = (image) => {
  return builder.image(image).url();
};
