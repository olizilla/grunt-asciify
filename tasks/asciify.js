/*
 * grunt-asciify
 * https://github.com/oli/grunt-asciify
 *
 * Copyright (c) 2013 olizilla
 * Licensed under the MIT license.
 */

'use strict';

var asciify = require('asciify');

module.exports = function(grunt) {

	grunt.registerMultiTask('asciify', 'Ascii awesomizer. A Grunt task for better banners and hot logs.', function() {
		
		var done = this.async();

		// Merge task-specific and/or target-specific options with these defaults.
		var options = this.options({
			font: 'graffiti',
			log: false
		});

		var propertyName = 'asciify_' + this.target;

		var self = this;

		asciify(this.data.text, options.font, function(result) {
			
			self.files.forEach(function(file){

				if(file.dest){
					grunt.file.write(file.dest, result);
				}
			});

			grunt.config.set(propertyName, result);

			if (options.log){
				console.log(result);
			}

			done();
		});
	});
};
