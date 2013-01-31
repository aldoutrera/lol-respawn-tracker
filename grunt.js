module.exports = function(grunt) {
  var cssBuiltPath = '';
  // Project configuration.
  grunt.initConfig({
    mincss: {
      compress: {
        files: {
          'css/built.css': [
            'css/bootstrap.min.css',
            'css/bootstrap-responsive.min.css',
            'css/custom.css'
          ]
        }
      }
    },
    min: {
      dist: {
        src: [
          'js/vendor/jquery-1.9.0.min.js',
          'js/plugins.js',
          'js/vendor/countdown.min.js',
          'js/main.js'
        ],
        dest: 'js/built.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-mincss');

  // Default task.
  grunt.registerTask('default', 'min mincss');

};
