module.exports = {
    entry: {
        main: './day01/main.js',
    },
    mode: "development",
    optimization: {
        minimize: false,
    },
    module: {
        rules: [
            // { test: /\.css$/, use: 'css-loader' },
            // { test: /\.ts$/, use: 'ts-loader' },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: [[
                            '@babel/plugin-transform-react-jsx',
                            {
                                pragma: 'ToyReact.createElement',
                            },
                        ]],
                    },
                },
            },
        ],
    },
};