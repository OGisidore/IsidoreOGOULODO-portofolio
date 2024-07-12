const path = require('path');
const Dotenv = require('dotenv-webpack');


module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  entry: {
    main: './src/js/index.js', // Entry point for your main JavaScript file
    resume: './src/js/resume.js', // Add more entry points as needed
    gallery: './src/js/gallery.js',
    utilities : "./src/js/utilities.js",
    certificate:'./src/js/certificate.js',
    api : './src/js/api',
    geneics : './src/js/geneics.js',
    firestore : './src/js/firestore.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    fallback: {
      path: require.resolve('path-browserify'),
      fs: false,
      crypto: false,
      stream: false,
      http: false,
      https: false,
      os: false,
      buffer: false,
    },
  },
  plugins: [
    new Dotenv()
  ],
};
