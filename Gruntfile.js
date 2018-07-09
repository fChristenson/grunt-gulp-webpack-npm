const webpackConfig = require("./tasks/grunt-webpack");
const nodemonConfig = require("./tasks/grunt-nodemon");

module.exports = function(grunt) {
  grunt.initConfig({
    nodemon: nodemonConfig,
    webpack: webpackConfig
  });

  grunt.loadNpmTasks("grunt-nodemon");
  grunt.loadNpmTasks("grunt-webpack");
  grunt.registerTask("start", ["build", "nodemon"]);
  grunt.registerTask("build", ["webpack:dev"]);
  grunt.registerTask("build:watch", ["webpack:watch"]);
};
