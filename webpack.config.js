const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin')
module.exports = {
    //入口文件
    entry: './src/index.js',
    //出口文件
    output: {
        // 输出文件名
        filename: 'bundle.js',
        // 输出文件的存放路径
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new CleanWebpackPlugin(['dist'])
    ],
    module: {
        rules: [
            {
                // 匹配以.css 结尾的文件
                test: /\.css$/,
                // 使用以下这些loader
                use: [
                    'style-loader',
                    'css-loader'
                ],
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options:{
                            name:'[name][hash].[ext]',
                            // cdn 打包图片
                            publicPath: 'images/',
                            outputPath: 'images/'
                        }
                    }
                ]
            },
            // {
            //     test: /\.(png|jpg)$/,   
            //     use: [
            //         {
            //             loader: 'url-loader',
            //             options:{
            //                 limit: 8192,
            //                 name:'[name][hash].[ext]',
            //                 publicPath: 'images/',
            //                 outputPath: 'images/'
            //             }
            //         }
            //     ]
            // }
        ]
    }
}


