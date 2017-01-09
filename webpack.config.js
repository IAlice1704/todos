var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: './main.js',
    output: {
        filename: 'bundle.js'
    },
    resolve: {
    	modulesDirectories: ['node_modules']
    },
    module: {
    	loaders: [
      {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/, query: {
          presets: ['es2015']
        }
      },
      {test: /\.css$/, loaders: 'style-loader!css-loader' , exclude: /node_modules/},
      {test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery' },
      {test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" },
      {test: /\.html$/, loader: 'raw',exclude: /node_modules/},
      {test: /^((?!config).)*\.js?$/, exclude: /node_modules/, loader: 'babel?cacheDirectory'},
      {test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/, loader: 'file', exclude: /node_modules/}
    ],
    plugins: [
    		new ExtractTextPlugin('bundle.css'),
    ]

    }
};