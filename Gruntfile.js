module.exports = function(grunt){

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jasmine_node: {
      options: {
        forceExit: true,
      },
      all: ['spec/']
      },
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        },
      },
    },
    watch: {
      scripts: {
        files: ['server.js', 'test/*.js'],
        // tasks: ['jshint'],
        tasks: ['express:test', 'mocha_casperjs'],
        options: {
          spawn: false,
          // livereload: true,
        },
      },
    },
    express: {
      options: {
        port: 3000,
      },
       test: {
        options: {
          script: 'server.js'
        },
      },
    },
    mocha_casperjs: {
      options: {        
      },
      files: {
        src: ['test/**/*']
      }
    }
  });

  grunt.loadNpmTasks('grunt-jasmine-node');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-mocha-casperjs');
  grunt.loadNpmTasks('grunt-express-server');

  grunt.registerTask('default', ['express', 'mocha_casperjs']);
};
