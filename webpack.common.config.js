const path = require("path")
    const HtmlWebpackPlugin = require("html-webpack-plugin")
    const CssWebpackPlugin = require("mini-css-extract-plugin")
    
    module.exports = {
        output: {
            path: path.resolve(__dirname, './result'), //путь к каталогу
            filename: "app.bundle.js"
        }
    
     
    }
    
    module.exports = {
        mode: "development",
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: "raw-loader"
                },
                {
                    test: /\.txt$/,//регулярное выражение, если написан какой то txt и строка закончилась, то этот текст нам подходит
                    loader: 'raw-loader' //загрузчик, помогает полностью прочитать файл в текстовом формате
                },
                {
                    test: /\.css$/,
                    use: [
                        CssWebpackPlugin.loader,
                        'css-loader'
                    ]
                }
    
            ]
        },
    
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html',
                filename: 'index.html'
            }),
            new CssWebpackPlugin()
        ]
    } 
