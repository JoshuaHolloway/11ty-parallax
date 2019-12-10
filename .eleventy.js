module.exports = function(config) {
  return {
    dir: {
      input: 'src/site',
      output: 'dist',
      includes: 'templates' // _includes
    },
    templateFormats: ['html', 'md'],
    htmlTemplateEngine: 'liquid',
    markdownTemplateEngine: 'liquid'
  };
};
