const webpackConfig = require("../webpack.config");

module.exports = {
  dev: Object.assign({ watch: false }, webpackConfig),
  watch: Object.assign({ watch: true }, webpackConfig)
};
