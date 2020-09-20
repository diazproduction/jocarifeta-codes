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
            author
            content
            createdAt
            poem
            slug
          }
        }`,
      }),
    });

    const json = await data.json();

    return json.data.allArticles.map(
      ({ title, author, content, createdAt, poem, slug }, idx) => ({
        idx,
        title,
        author,
        content,
        created: createdAt,
        extract: getExtract(content, poem),
        isPoem: poem,
        slug,
      }),
    );
  } catch (error) {
    console.error(error);
  }
};

function getExtract(content, isPoem) {
  const dots = ['...'];
  if (isPoem) {
    return content.split('\n').slice(0, 8).concat(dots).join('\n');
  }
  return content.split(' ').slice(0, 110).concat(dots).join(' ');
}

module.exports = getAllArticles;
