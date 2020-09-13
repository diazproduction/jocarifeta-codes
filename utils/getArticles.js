const fetch = require('node-fetch');

const token = process.env.DATOCMS_TOKEN;

const getAllArticles = async () => {
  try {
    const data = await fetch('https://graphql.datocms.com/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        query: `{
          allArticles {
            title
            content
            createdAt
            slug
          }
        }`,
      }),
    });

    const json = await data.json();

    return json.data.allArticles.map(({ title, content, createdAt, slug }) => ({
      title,
      content,
      createdAt,
      slug,
    }));
  } catch (error) {
    console.error(error);
  }
};

module.exports = getAllArticles;
