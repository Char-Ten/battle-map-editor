const webpack = require("webpack");
const path = require("path");
const configs = require("./configs")

module.exports = {
	mode:"production",
    entry: {
        dll: [
            "mobx",
			"mobx-react",
			"react",
            "react-dom",
            "react-router",
            "react-router-dom",
            "react-loadable"
        ]
	},
	output:{
		filename:'dll/index.js',
		path:path.join(__dirname,'../static'),
		library:"$$dll"
	},
	plugins:[
		new webpack.DllPlugin({
			context:__dirname,
			path:path.join(__dirname,'../static/dll/manifest.json'),
			name: '$$dll'
		})
	]
};
