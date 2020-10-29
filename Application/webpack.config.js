const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const outputDirectory = ['./dist/react', './dist/server'];

module.exports = [
  {
    entry: ['babel-polyfill', './src/server/index.ts'],
    target: 'node',
    output: {
      path: path.join(__dirname, outputDirectory[1]),
      filename: 'server.js'
    },
    module: {
      rules: [{
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      }
      ]
    },
    resolve: {
      extensions: ['*', '.ts', '.tsx', '.js', '.jsx']
    },
    devServer: {
      port: 3000,
      open: true,
      proxy: {
        '/api': 'http://localhost:8080'
      }
    },
    plugins: [
      new CleanWebpackPlugin([outputDirectory[1]])
    ]
  },
  {
    entry: ['babel-polyfill', './src/client/index.tsx'],
    target: 'node',
    output: {
      path: path.join(__dirname, outputDirectory[0]),
      filename: 'bundle.js'
    },
    module: {
      rules: [{
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      }
      ]
    },
    resolve: {
      extensions: ['*', '.ts', '.tsx', '.js', '.jsx']
    },
    plugins: [
      new CleanWebpackPlugin([outputDirectory[0]]),
      new HtmlWebpackPlugin({
        template: './public/index.html',
        favicon: './public/favicon.ico'
      })
    ]
  }
];