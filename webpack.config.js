const path = require('path');
const webpack = require('webpack');

const assetRoot = 'https://seracio.github.io/d3-react-scaffolder';

const env = process.env.NODE_ENV || 'production';

console.log(env);

module.exports = {
    entry: {
        vis: path.resolve('src/index.js'),
    },
    output: {
        filename: '[name].js',
        path: 'dist',
        publicPath: `${env === 'production' ? assetRoot : ''}/dist/`
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            __ASSETS_DIR__: JSON.stringify(`${env === 'production' ? assetRoot : ''}/`),
            'process.env.NODE_ENV': JSON.stringify(env)
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ],
    devtool: env === 'production' ? '' : 'cheap-module-eval-source-map'
};
