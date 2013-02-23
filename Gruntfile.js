/*
 * grunt-task-figlet
 * https://github.com/oli/grunt-task-figlet
 *
 * Copyright (c) 2013 olizilla
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>',
      ],
      options: {
        jshintrc: '.jshintrc',
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp'],
    },

    // Configuration to be run (and then tested).
    asciify: {
      default_options: {
        text: 'Asciify',
        dest: 'tmp/default_options'
      },

      custom_options: {
        text: 'GRUNT!',
        options: {
          font:'doom',
        },
        dest:'tmp/custom_options'
      },

      banner:{
        text: 'GRUNT-ASCIIFY!',
        options:{
          font:'graffiti',
          log:true
        }
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js'],
    },

    // Use asciify to make banner
    uglify:{
      options: {
        banner: '/*!\n <%= asciify_banner %> \n*/\n'
      },
      all:{
        src:'Gruntfile.js',
        dest:'Grunfile.withbanner.min.js'        
      }
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'asciify', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'asciify', 'uglify']);

};
