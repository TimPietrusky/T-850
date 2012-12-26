var fs = require('fs'),
    compressor = require('node-minify'),
    sys = require('sys'),
    exec = require('child_process').exec;

fs.open('js/libs.js', 'a', 666, function( e, id ) {
console.log(id);
});


new compressor.minify({
  type: 'yui-js',
  fileIn: _site,
  fileOut: _site.replace('.js', '-min.js'),
  callback: function(err){
    if (err != null) {
      console.log(err);
    }
  }
});