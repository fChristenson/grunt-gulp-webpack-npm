const gulp = require("gulp");
const nodemon = require("gulp-nodemon");

gulp.task("start", ["build"], function() {
  return nodemon({ script: "server.js" });
});
