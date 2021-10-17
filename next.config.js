const path = require('path');

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `
      $themePurple: #7922f2;
      $themeDarkPurple: #6c1ed9;
      $themeLightPurple: #e1b7ff;
      $themeBlack: #151126;
      $themeOrange: #f25c05;
      $themeRed: #f24405;
      $themeWhite: #ffffff;

      $textBlack: #262626;
      $lightGrey: #dbdbdb;
      $absoluteBlack: #000;
    `
  },
  images: {
    domains: ['indigo-clothing-company.s3.amazonaws.com'],
  },
};
