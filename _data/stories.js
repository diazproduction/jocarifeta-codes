const getArticles = require('../utils/getArticles');

module.exports = async function () {
  const articles = await getArticles();
  return articles.filter((article) => !article.isPoem);
};
