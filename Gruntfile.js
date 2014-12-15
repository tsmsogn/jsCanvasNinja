module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      build: {
        src: [
          'src/utils/Callback.js',
          'src/utils/Command.js',
          'src/utils/CommandManager.js',
          'src/utils/Utility.js',
          'src/geom/Transform.js',
          'src/display/Bitmap.js',
          'src/display/Text.js',
          'src/display/Line.js',
          'src/display/Circle.js',
          'src/display/Triangle.js',
          'src/display/Rect.js',
          'src/display/Ellipse.js',
          'src/display/PolyStar.js',
          'src/display/RoundRect.js',
          'src/display/Frame.js',
          'src/display/Stage.js'
        ],
        dest: 'lib/jscanvasninja.min.js'
      }
    },
    jshint: {
      all: ['Gruntfile.js', 'src/**/*.js', 'src-test/**/*.js']
    },
    jasmine: {
      all: {
        src: 'src/**/*.js',
        options: {
          specs: 'test/**/*Spec.js',
          vendor: [
            'https://raw.githubusercontent.com/CreateJS/EaselJS/0.5.0/lib/easeljs-0.5.0.min.js',
            'http://raw.github.com/andrewplummer/Sugar/master/release/sugar.min.js'
          ]
        }
      },
      istanbul: {
        src: '<%= jasmine.all.src %>',
        options: {
          vendor: '<%= jasmine.all.options.vendor %>',
          specs: '<%= jasmine.all.options.specs %>',
          template: require('grunt-template-jasmine-istanbul'),
          templateOptions: {
            coverage: 'coverage/json/coverage.json',
            report: [
              {type: 'html', options: {dir: 'coverage/html'}},
              {type: 'lcov', options: {dir: 'coverage/lcov'}}
            ]
          }
        }
      }
    },
    coveralls: {
      options: {
        // LCOV coverage file relevant to every target
        src: 'coverage/lcov/lcov.info',

        // When true, grunt-coveralls will only print a warning rather than
        // an error, to prevent CI builds from failing unnecessarily (e.g. if
        // coveralls.io is down). Optional, defaults to false.
        force: false
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Load the plugin that provides the "jshint" task.
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Load the plugin that provides the "jasmine" task.
  grunt.loadNpmTasks('grunt-contrib-jasmine');

  // Load the plugin that provides the "coveralls" task.
  grunt.loadNpmTasks('grunt-coveralls');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);

  // Test task(s).
  grunt.registerTask('test', ['jasmine:istanbul']);

};
