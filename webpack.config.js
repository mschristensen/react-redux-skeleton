var path = require('path');
var webpack = require("webpack");

var APP_DIR = path.join(__dirname, 'app');
var DEST_DIR = path.join(__dirname, 'dist');

module.exports = {
    entry: path.join(APP_DIR, 'app.jsx'),
    output: {
        filename: 'bundle.js',
        path: DEST_DIR
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module : {
        loaders : [{
            test : /\.jsx?/,
            include : APP_DIR,
            loader : 'babel-loader'
        }]
    }
};
