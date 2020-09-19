require('dotenv').config();
const dayjs = require('dayjs');
const md = require('markdown-it')({
  breaks: true,
});

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget('./_tmp/style.css');

  eleventyConfig.addPassthroughCopy({ './_tmp/style.css': './style.css' });

  eleventyConfig.addPassthroughCopy({
    './node_modules/alpinejs/dist/alpine.js': './js/alpine.js',
  });

  eleventyConfig.addShortcode('version', function () {
    return String(Date.now());
  });

  eleventyConfig.addFilter('consoleDump', function (anything) {
    console.log(anything);
  });

  eleventyConfig.addFilter('dayjs', function (date) {
    return dayjs(date).format('MMMM D, YYYY');
  });

  eleventyConfig.addFilter('markdown', function (content) {
    return md.render(content);
  });
};
