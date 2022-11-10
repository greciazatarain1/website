const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,

  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "@/assets/scss/variables.scss";
          @import "@/assets/scss/responsive.scss";
          @import "@/assets/scss/main.scss";
        `
      }
    }
  }
});