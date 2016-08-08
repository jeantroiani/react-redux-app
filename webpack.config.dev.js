var webpack = require('webpack');
var path =  require('path');

//https://webpack.github.io/docs/configuration.html#target
module.exports = {
    debug: true,
    devtool: "cheap-module-eval-source-map",
    noInfo:  false,
    entry: [
//        'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
        './src/index.js'
    ],
    target: 'web',                                      //bundling to browser instead of node for example.
    output: {
        path: __dirname + '/dist',                      //Physical files are only output by the production build task node development.
        filename: "bundle.js",
        publicPath: '/'                                 //Can be helpful when you want to host some or all output files on a different domain or on a CDN
    },
    devServer: {
      contentBase: './src'                              //Tells dev server where our code is.
    },
    plugings: [                                         //Add additional plugins to the compiler.
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),       // hot reloader.
        new webpack.NoErrorsPlugin()                    // errors do nt break the server.
    ],
    module: {                                           //types of files to handle and how.
        loaders: [
            { test: /\.js$/, include: path.join(__dirname, 'src'), loader: 'babel', },
            { test: /\.css$/, loader: "style, css"},
            { test: /\.svg/, loader: 'svg-url-loader'}
        ]
    }
};
