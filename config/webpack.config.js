const PATH = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin")
const configs = require("./configs");

module.exports = {
    mode: "development",
    entry: {
        app: PATH.join(__dirname, "../src/index.js")
    },
    output: {
        filename: "src/js/[name].js",
        sourceMapFilename: "src/sourcemap/[name].map",
        chunkFilename: "src/js/chunks/[id].js",
        path: configs.OUTPUT_PATH
    },
    resolve: {
        alias: {
			src: PATH.join(__dirname, "../src"),
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: PATH.join(__dirname, "../node_modules"),
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
				use:ExtractTextWebpackPlugin.extract({
					fallback:"style-loader",
					use:["css-loader","postcss-loader"]
				})
            },
            {
                test: /\.less$/,
				use:ExtractTextWebpackPlugin.extract({
					fallback:"style-loader",
					use:["css-loader","less-loader","postcss-loader"]
				})
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            filename: "[path][name].[ext]"
                        }
                    }
                ]
            }
        ]
    },
	devtool: "source-map",
	devServer:{
		port:2333,
	},
    plugins: [
        new HTMLWebpackPlugin({
            template: PATH.join(__dirname, "../index.html")
        }),
        new CopyWebpackPlugin([{
            from: PATH.join(__dirname, "../static"),
            to: PATH.join(__dirname, "../dist/static")
		}]),
		
		new webpack.DllReferencePlugin({
			context:__dirname,
			manifest:require("../static/dll/manifest.json"),
			name: '$$dll'
		}),

		new ExtractTextWebpackPlugin('src/css/[name].css')
    ]
};
