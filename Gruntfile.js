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
      src: 'src/**/*.js',
      options: {
        specs: 'test/**/*Spec.js',
        vendor: [
          'https://raw.githubusercontent.com/CreateJS/EaselJS/release_v0.5.0/lib/easeljs-0.5.0.min.js',
          'http://raw.github.com/andrewplummer/Sugar/master/release/sugar.min.js'
        ]
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Load the plugin that provides the "jshint" task.
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Load the plugin that provides the "jasmine" task.
  grunt.loadNpmTasks('grunt-contrib-jasmine');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);

  // Test task(s).
  grunt.registerTask('test', ['jasmine']);

};
