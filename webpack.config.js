const path = require('path');
module.exports = {
    entry:'./build/index.js'
    ,
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /.*\.css$/,
                loaders: ["style", "css"],
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['*', '.css', '.js', 'jsx']
    }
};