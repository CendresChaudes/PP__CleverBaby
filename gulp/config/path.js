import * as nodePath from 'path';

const rootFolder = nodePath.basename(nodePath.resolve());
const buildFolder = 'dist';
const sourceFolder = 'source';

export const path = {
  build: {
    html: `${buildFolder}/`,
    css: `${buildFolder}/css/`,
    js: `${buildFolder}/js/`,
    images: `${buildFolder}/images/`,
    sprite: `${buildFolder}/images/sprite`,
  },
  source: {
    pug: `${sourceFolder}/pug/pages/*.pug`,
    scss: `${sourceFolder}/sсss/style.scss`,
    js: `${sourceFolder}/js/**/*.js`,
    bitmap: `${sourceFolder}/images/**/*.{jpg,jpeg,png,webp}`,
    favicons: `${sourceFolder}/images/favicons/*`,
    svg: `${sourceFolder}/images/**/*.svg`,
    sprite: `${sourceFolder}/images/sprite/*.svg`,
    fonts: `${sourceFolder}/fonts/**/*.{woff,woff2}`,
    other: `${sourceFolder}/*.{ico,webmanifest}`
  },
  watch: {
    pug: `${sourceFolder}/pug/**/*.pug`,
    scss: `${sourceFolder}/sсss/**/*.scss`,
    js: `${sourceFolder}/js/**/*.js`,
    bitmap: `${sourceFolder}/images/**/*.{jpg,jpeg,png,svg,webp}`,
    favicons: `${sourceFolder}/images/favicons/*`,
    svg: `${sourceFolder}/images/**/*.svg`,
    sprite: `${sourceFolder}/images/sprite/*.svg`,
    fonts: `${sourceFolder}/fonts/**/*.{woff,woff2}`,
    other: `'${sourceFolder}/*.{ico,webmanifest}`
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  sourceFolder: sourceFolder,
  root: rootFolder
};
