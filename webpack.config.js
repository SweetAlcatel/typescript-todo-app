const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './public/index.html',
  filename: 'index.html',
  favicon: './public/favicon.ico'
});
 
module.exports = {
  entry: './src/index.tsx',
 
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
 
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [HtmlWebpackPluginConfig],
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, './dist'),
    open: true,
    compress: true,
    hot: true,
    port: 3000,
},
};
 
