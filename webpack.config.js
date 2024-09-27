const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Make sure to update the entry point if necessary
  output: {
    path: path.resolve(__dirname, 'build'), // Set output folder to 'build'
    filename: 'bundle.js', // Customize the output filename if needed
    publicPath: '/', // Set the base path for all assets
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]',
              outputPath: 'assets', // Store images in 'assets' folder
            },
          },
        ],
      },
    ],
  },
  devServer: {
    historyApiFallback: true, // this is for React Router
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'], // Add any file extensions you're working with
  },
};
