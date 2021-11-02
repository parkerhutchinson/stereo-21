const contentful = require('contentful');


const client = contentful.createClient({
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  space: process.env.CONTENTFUL_SPACE_ID,
});


const getContentfulData = async () => {
  const data = await client.getEntries({
    limit: 1000,
    content_type: 'page',
    include: 10
  });

  return data.items;
}


export const getContentfulPaths = async () => {
  const data = await client.getEntries({
    content_type: 'page'
  });

  // return data.items.map((data) => ({ params: { slug: data.fields.path } }));
  return [{ params: { slug: ["/"] } }]
}

export default getContentfulData;