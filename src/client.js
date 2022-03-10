import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "y8aa8wp5",
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  ignoreBrowserTokenWarning: true,
  token: process.env.REACT_APP_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
