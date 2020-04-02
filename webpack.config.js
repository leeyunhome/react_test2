const path = require('path');
process.env.NODE_ENV = 'production';

module.exports = {
    name: 'react_test2',
    mode: 'development', // 실서비스: production
    devtool: 'eval',    // 실서비스: hidden-source-map
    resolve: {
        extensions: ['.js', '.jsx']
    },

    entry: {
        app: ['./client'],
    },

    module: {
        rules: [{
            test: /\.jsx?/,
            loader: 'babel-loader',
            options: {
                presets: [
                    ['@babel/preset-env', {
                        targets: {
                            // browsers: ['> 5% in KR', 'last 2 chrome versions'],
                            browsers: ['> 1% in KR'],   // browserslist
                        },
                        debug: true,
                    }], 
                    '@babel/preset-react',
                ],
                plugins: [
                    '@babel/plugin-proposal-class-properties',
                    // 'react-hot-loader/babel',
                ],
            },
        }],
    },

    plugins: [],

    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.js',
        publicPath: '/dist/', // express.static이랑 비슷
    }, // 출력
};