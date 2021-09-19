const path = require('path');

module.exports = {
    entry: {

       path: path.resolve(__dirname, `./src/js/script.js`),
},
    output: {
        path: path.resolve(__dirname, "dist/"),
        filename: "testbuild.js",
    },
};
// module:{
//     rules:[
//         {
//             test: /\.s[ac]ss$/i,
//             use: [
//                 "style-loader",
//                 "css-loader",
//                 "sass-loader",
//             ],
//         },
//     ]
// }
// };