const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const devConfig = {
    mode: 'development',
    devServer: {
        port: 8080,
        historyApiFallback:{
            index: '/index.html'
        }
    },

    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                payments: 'payments@http://localhost:8081/remoteEntry.js',
                transactions: 'transactions@http://localhost:8083/remoteEntry.js',
                structure: 'structure@http://localhost:8082/remoteEntry.js'
            },
            //shared: packageJson.dependencies,
            shared: {
                react: {
                    singleton: true,
                },
                
            }
        }),
        new HtmlWebpackPlugin(
            {
                template: './public/index.html'
            }
        )
    ]
}

module.exports = merge(commonConfig, devConfig);