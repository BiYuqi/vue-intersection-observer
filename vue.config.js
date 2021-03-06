const isProd = process.env.NODE_ENV === "production";

module.exports = {
  publicPath: isProd ? "/vue-intersection-observer/" : "/",
  productionSourceMap: false
};
