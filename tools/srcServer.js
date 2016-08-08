const express = require('express');
const webpack = require('webpack');
const path = require('path');
const config = require('../webpack.config.dev');
const open =  require('open');
const devServerFactory = require('webpack-dev-middleware');

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);
const devServer = devServerFactory(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
});

app.use(devServer);

app.use(require('webpack-hot-middleware')(compiler)); //same as the stuff on top.

app.get('*', function(req, res) {
    res.sendFile(path.join( __dirname, '../src/index.html'));
});

app.listen(port, function(err) {
    if (err) {
        console.log(err);
    } else {
        open(`http://localhost:${port}`);
    }
});
