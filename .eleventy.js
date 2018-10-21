// Configuration settings for Eleventy.
// (The SSG which generates this site)
// More info: https://www.11ty.io


const CleanCSS              = require('clean-css');
const syntaxHighlightPlugin = require('@11ty/eleventy-plugin-syntaxhighlight');


module.exports = function(eleventyConfig) {

  // add a filter to minify our css for inlining
  eleventyConfig.addFilter('cssmin', function(code) {
    return new CleanCSS({}).minify(code).styles;
  });

 // syntax highlighting plugin
 eleventyConfig.addPlugin(syntaxHighlightPlugin, {
   templateFormats: ['md', 'njk']
 });

  // static passthroughs
  eleventyConfig.addPassthroughCopy('src/images');

  // other config settings
  return {
    dir: {
      input: 'src',
      output: 'dist',
      data: 'data'
    },
    passthroughFileCopy: true
  };

};
