/*
 * grunt-task-figlet
 * https://github.com/oli/grunt-task-figlet
 *
 * Copyright (c) 2013 olizilla
 * Licensed under the MIT license.
 */

'use strict';

var Figlet = require("./helper/figlet-js/figlet-node").Figlet;

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('asciify', 'Awesomize your text', function() {
    
    var done = this.async();

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      font: 'standard',
      log:false
    });

    var propertyName = 'asciify-' + this.target;

    var self = this;

    Figlet.write(this.data.text, options.font, function(str) {
      
      self.files.forEach(function(file){

        if(file.dest){
          grunt.file.write(file.dest, str);
        }
      });

      grunt.config.set(propertyName, str);

      if (options.log){
        console.log(str);
      }

      done();
    });

  });
};
