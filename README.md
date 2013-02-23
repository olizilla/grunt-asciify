# grunt-asciify

>  ________ __________  ____ ___  _______   ___________            _____     __________________  .___ .___ ________________.___.._.
> /  _____/ \______   \|    |   \ \      \  \__    ___/           /  _  \   /   _____/\_   ___ \ |   ||   |\_   _____/\__  |   || |
>/   \  ___  |       _/|    |   / /   |   \   |    |     ______  /  /_\  \  \_____  \ /    \  \/ |   ||   | |    __)   /   |   || |
>     \_\  \ |    |   \|    |  / /    |    \  |    |    /_____/ /    |    \ /        \\     \____|   ||   | |     \    \____   | \|
> \______  / |____|_  /|______/  \____|__  /  |____|            \____|__  //_______  / \______  /|___||___| \___  /    / ______| __
>        \/         \/                   \/                             \/         \/         \/                \/     \/        \/


Plain-text Awesomizer. Uses [figlet-js](https://github.com/olizilla/figlet-js) forked from [scottgonzalez/figlet-js](https://github.com/scottgonzalez/figlet-js)

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

```js
grunt.initConfig({
  asciify: {
    options: {
      font: 
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

#### options.font
Type: `String`
Default value: `standard`

The name of the figlet font to use. Full list here: https://github.com/olizilla/figlet-js/tree/master/fonts

#### options.log
Type: `Boolean`
Default value: `false`

Write your asciified text to the console

### Usage Examples

#### Default Options
In this example, the default options are used to do something with whatever. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result would be `Testing, 1 2 3.`

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
