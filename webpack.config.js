var path = require('path')

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js',
    pathinfo: true
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 1,
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: 'inline',
            }
          }
        ]
      },
        // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
        { test: /(\.ts|\.tsx)$/, loader: "awesome-typescript-loader" },

        // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
        { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]

  },
  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, './src')
    ]
  }

};
