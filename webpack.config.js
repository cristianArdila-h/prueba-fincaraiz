var path = require('path');

module.exports = {
    entry: './App.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: { presets: ['env', 'react'] }
                }
            },
            {
                test: /\.svg$/,
                use: {
                  loader: "svg-url-loader",
                  options: {
                    limit: 10000,
                    iesafe: true,
                  },
                },
              },
              {
                test: /\.s[ac]ss$/i,
                use: [
                  // Creates `style` nodes from JS strings
                  "style-loader",
                  // Translates CSS into CommonJS
                  "css-loader",
                  // Compiles Sass to CSS
                  "sass-loader",
                ],
              },
        ]
    }
};