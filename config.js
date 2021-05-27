/*
* Gulp Builder (Config)
* @version: 1.0.0 (Fri, 31 July 2020)
* @author: HtmlStream
* @license: Htmlstream (https://htmlstream.com/licenses)
* Copyright 2020 Htmlstream
*/


// You may find more detailed documentation at documentation/gulp.html

module.exports = {

  //
  // Start path when launching gulp
  //

  startPath: "/index.html",


  //
  // Variables that can be used in HTML pages and SVG files
  //

  vars: {
    googleFont: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap",
    version: "?v=1.0",
    style: {
      color: '#377DFF', // Primary Color
      font: 'Open Sans' // Primary Font
    }
  },


  //
  // Skip files (only css,js) from bundle files (e.g. theme.min.css, vendor.min.css)
  //

  skipFilesFromBundle: {
    dist: [
      "assets/js/theme-custom.js",
      "assets/js/hs.custombox.js",
      "assets/js/hs.autocomplete-local-search.js",
    ],

    build: [
      "assets/css/docs.css",
      "assets/css/snippets.css",
      "node_modules/@fortawesome/fontawesome-free/css/all.css",
      "node_modules/babel-polyfill/dist/polyfill.js",
      "assets/vendor/custombox/dist/custombox.min.css",
      "assets/vendor/custombox/dist/custombox.min.js",
      "assets/vendor/custombox/dist/custombox.legacy.min.js",
      "assets/js/theme-custom.js",
      "assets/js/hs.custombox.js",
      "assets/js/hs.autocomplete-local-search.js",
      'assets/vendor/hs-scroll-nav/dist/hs-scroll-nav.min.js'
    ]
  },


  //
  // Copy and pase files into folders
  //

  copyDependencies: {
    dist: {
      "*assets/js/theme-custom.js": ""
    },

    build: {
      "assets/vendor/fontawesome/*webfonts/**": "assets",
      "*assets/js/theme-custom.js": "",
      "*assets/svg/components/circle-preloader.svg": "",
      "*assets/video/working-in-office.mp4": "",
      "*assets/ajax/autocomplete-data-for-documentation-search.json": "",
      "*assets/ajax/autocomplete-data-for-snippets-search.json": "",
      "*assets/img/750x600/*": ""
    }
  },


  //
  // An option to set custom folder name for build process
  //

  buildFolder: "", // e.g. my-project


  //
  // Replace an asset paths in HTML to CDN
  //

  replacePathsToCDN: {},


  //
  // Chnage directory folder names
  //

  directoryNames: {
    src: "./src",
    dist: "./dist",
    build: "./build"
  },


  //
  // Bundle file names for modes
  //

  fileNames: {
    dist: {
      js: "theme.min.js",
      css: "theme.min.css"
    },

    build: {
      css: "theme.min.css",
      js: "theme.min.js",
      vendorCSS: "vendor.min.css",
      vendorJS: "vendor.min.js",
    }
  },


  //
  // Files types that will be copied to the ./build/* folder
  //

  fileTypes: "jpg|png|svg|mp4|webm|ogv",

}
