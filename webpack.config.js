var path = require("path");
module.exports = {
    entry: ["./src/index.js"],
//            "./src/data/recipes.json" ],
    output: {
        path: path.join(__dirname, "dist", "assets"),
        filename: "bundle.js"
    },
    module: {
        rules: [{ test: /\.js$|jsx/, exclude: /node_modules/, loader: "babel-loader" }],
    }
};