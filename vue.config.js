module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
              @import "@/scss/main.scss";
              @import "@/scss/_variables.scss";
            `,
      },
    },
  },
};
