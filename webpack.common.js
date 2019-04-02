const path = require('path');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
    entry: [
        './src/index.js'
    ],
    plugins: [
        new CleanWebpackPlugin(['www']),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new CopyWebpackPlugin([
            {from: 'src/img/', to: '', flatten: false},
        ]),
    ],
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'www'),
        publicPath: '/'
    },
    resolve: {
        extensions: ['.*', '.jsx', '.js', '.json', '.scss']
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: [
                'babel-loader',
                'import-glob'
            ]
        },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader'
                    },
                    'import-glob',
                ]
            },
            {
                test: /\.svg$/,
                loader: 'raw-loader'
            },
            {
                test: /\.(jpe?g|png|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: "[name].[ext]"
                        }
                    }
                ]
            },
            {
                test: /\.(eot|otf|webp|ttf|woff|woff2)(\?.*)?$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]"
                        },
                    },
                ],
            },

        ]
    }
};
