const cssnano = require('cssnano');
const pxtorem = require('postcss-pxtorem');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const IN_PRODUCTION = process.env.NODE_ENV === 'production';

module.exports = {
  plugins: [
    tailwindcss(),
    autoprefixer(),
    pxtorem({
      rootValue: 37.5, // 设计稿宽度,750
      propList: ['*'],
    }),
    IN_PRODUCTION &&
      cssnano({
        'cssnano-preset-advanced': {
          zindex: false,
          autoprefixer: false,
        },
      }),
  ],
};
