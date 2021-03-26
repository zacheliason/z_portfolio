  const fs = require('fs');
  var webpack = require('webpack');


  const someFileContents = fs.readFileSync('helloworld.txt');
  console.log(someFileContents);
  module.exports = {
    lintOnSave: true,

    configureWebpack: config => {
      return {
        plugins: [
          new webpack.DefinePlugin({
            'access': someFileContents,
          })
        ]
      }
    },
  }
