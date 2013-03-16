# grunt-asciify

Ascii awesomizer. A Grunt task for better banners and hot logs.

```
    _____     __________________  .___ .___ ________________.___.._.
   /  _  \   /   _____/\_   ___ \ |   ||   |\_   _____/\__  |   || |
  /  /_\  \  \_____  \ /    \  \/ |   ||   | |    __)   /   |   || |
 /    |    \ /        \\     \____|   ||   | |     \    \____   | \|
 \____|__  //_______  / \______  /|___||___| \___  /    / ______| __
         \/         \/         \/                \/     \/        \/
```
[![Dependency Status](https://david-dm.org/olizilla/grunt-asciify.png)](https://david-dm.org/olizilla/grunt-asciify)
[![Build Status](https://travis-ci.org/olizilla/grunt-asciify.png)](https://travis-ci.org/olizilla/grunt-asciify)


```js
asciify: {
  myBanner: {
    text: 'Text to asciify'
  }
},
uglify:{
  options: {
    banner: '/*!\n <%= asciify_myBanner %> \n*/\n'
  },
  all:{
    src:'Gruntfile.js',
    dest:'Gruntfile.withbanner.min.js'        
  }
}
```

## Getting Started
This plugin requires Grunt `~0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-asciify --save-dev
```

One the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-asciify');
```

## The "asciify" task

### Overview
In your project's Gruntfile, add a section named `asciify` to the data object passed into `grunt.initConfig()`.

### Options

#### Default Options
```js
options:{
  font:'graffiti'
  log:false,
}
```

#### options.font
Type: `String`
Default value: `graffiti`

The name of the figlet font to use. Full list here: https://github.com/olizilla/figlet-js/tree/master/fonts

#### options.log
Type: `Boolean`
Default value: `false`

Write your asciified text to the console

![asciify options.log=true](https://raw.github.com/olizilla/grunt-asciify/master/doc/grunt-asciify.png);

### Usage Examples

```js
grunt.initConfig({
  asciify: {
    banner:{
      text: 'GRUNT-ASCIIFY!',
      options:{
        font:'graffiti',
        log:true
      }
    }
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
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
* 0.1.0 - IT BEGINS. ASCII BANNERS NOW MANDTORY.
* 0.2.0 - GRAFFITI BEATS STANDARD AS DEFAULT FONT. NOW DEPENDS ON THE ASCIIFY MODULE.
