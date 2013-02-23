/*
 * grunt-task-figlet
 * https://github.com/oli/grunt-task-figlet
 *
 * Copyright (c) 2013 olizilla
 * Licensed under the MIT license.
 */


var Figlet = require("./helper/figlet-js/figlet-node").Figlet;

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('asciify', 'Aweomize your text', function() {
    
    var done = this.async();

    console.log('in asciify', this);

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      font: 'standard'
    });

    console.log('options', options);

    grunt.log.writeln('HARO');

    var propertyName = 'asciify-' + this.target;
    // var text = this.data.text;

    Figlet.write(this.data.text, options.font, function(str) {
      
      grunt.config.set(propertyName, str);
      
      console.log(str);

      done();
    });

    // asciiart.font(this.data.text, options.font, function(rendered){
    //   grunt.config.set(propertyName, rendered);
    //   console.log(rendered);
    //   done();
    // });

  });
};
