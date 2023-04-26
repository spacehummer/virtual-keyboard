// ESLint rules per file start
/* eslint-disable no-console */
/* eslint-disable quotes */
// ESLint rules per file end

console.log({ env: process.env.NODE_ENV });

const env = process.env.NODE_ENV || "production";

module.exports = (
  env === "production"
    ? require("./webpack.prod.config")
    : require("./webpack.dev.config")
);

// module.exports = (env) => {
//   console.log(`WebPack mode env.NODE_ENV = ${env.NODE_ENV}`);
//   return env.NODE_ENV === "production"
//     ? require("./webpack.prod.config")
//     : require("./webpack.dev.config");
// };

// module.exports = process.env.NODE_ENV === "production"
//   ? webpackProdConfig
//   : webpackDevConfig;
