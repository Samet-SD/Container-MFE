const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
    mode: 'production', 
    output: {
        filename: '[name].[contenthash].js',
        publicPath: '/Container/latest/',
    },
   plugins: [
    new ModuleFederationPlugin({
        name: 'container',
        remotes: {
            payments: `payments@${domain}/payments/latest/remoteEntry.js`,
            transactions: `transactions@${domain}/transactions/latest/remoteEntry.js`,
            structure: `structure@${domain}/structure/latest/remoteEntry.js`
        },
        //shared: packageJson.dependencies
        shared: {
            react: {
                singleton: true,
            },
            
        }
    })

   ]


};

module.exports = merge(commonConfig, prodConfig);
