const path = require('path');

const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve('public/js'),
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {                
                test: /.jsx$/,
                use:{
                    loader:'babel-loader'
                },
                exclude: /node_module/
            }
        ]
    }
};

module.exports = config; 