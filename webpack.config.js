module.exports = {
	entry: [
		'./src/main.js'
	],
	output: {
    filename: 'bundle.js'
	},
	module: {
		rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: [
                      {loader: 'babel-loader'}
                   ]
             }, {
               test: /\.css$/,
                use: ['style-loader', 'css-loader']
             }, 
             {
               test: /\.(gif|svg|jpg|png)$/,
               loader: 'file-loader',
             }
           ] 
        }
     }