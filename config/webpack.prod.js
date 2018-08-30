const PATH=require("path")
const HTMLWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const devConfig = require("./webpack.config");
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin")
const configs = require("./configs");
module.exports={
	mode:"production",
	entry:devConfig.entry,
	output:devConfig.output,
	resolve:devConfig.resolve,
	module:devConfig.module,
	devtool:devConfig.devtool,
	optimization:{
		splitChunks:{
			cacheGroups: {
                commons: {
                    name: "commons",
                    chunks: "initial",
                    minChunks: 2
                }
            }
		}
	},
	plugins:[
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
			name: 'dll'
		}),
		new ExtractTextWebpackPlugin('src/css/[name].css')
	]
}