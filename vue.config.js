const VueCLI = require("@vue/cli-service");
const Path = require("path");

module.exports = VueCLI.defineConfig({
  transpileDependencies: true,
  lintOnSave: true,
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "Compilation Tools";
      return args;
    });
    config.resolve.alias
      .set("@", Path.join(__dirname, "src"))
      .set("@configs", Path.join(__dirname, "src/configs"))
      .set("@routers", Path.join(__dirname, "src/routers"))
      .set("@pages", Path.join(__dirname, "src/pages"))
      .set("@assets", Path.join(__dirname, "src/assets"))
      .set("@components", Path.join(__dirname, "src/components"))
      .set("@lib", Path.join(__dirname, "src/lib"))
      .set("@ui", Path.join(__dirname, "src/ui"));
  },
  configureWebpack: (config) => {
    config.plugins = [...config.plugins, ...[]];
  },
  devServer: {
    host: "0.0.0.0",
    port: 9999,
    open: true,
    hot: true
  }
});
