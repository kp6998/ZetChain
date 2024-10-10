const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js', // Your entry point
  output: {
    path: path.resolve(__dirname, 'build'), // Ensure output path is 'build'
    filename: 'bundle.js',
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
          },
        ],
      },
    ],
  },
  devServer: {
    historyApiFallback: true, // For react-router support
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Ensure it uses the index.html from the public folder
      filename: 'index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'public'), // Copy from 'public' folder
          to: path.resolve(__dirname, 'build'), // Destination: root of 'build' folder
          globOptions: {
            ignore: ['**/index.html'], // Ignore index.html as HtmlWebpackPlugin handles it
          },
          noErrorOnMissing: true, // Avoid errors if the public folder is empty
        },
      ],
    }),
  ],
};
