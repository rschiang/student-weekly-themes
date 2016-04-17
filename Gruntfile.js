'use strict';

module.exports = function(grunt) {
    // Load all grunt tasks
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({
        watch: {
            files: 'src/*.less',
            tasks: ['less']
        },
        less: {
            development: {
                options: {
                    paths: ['src/']
                },
                files: {
                    'assets/weekly.css': 'src/weekly.less'
                }
            }
        }
    });

    // "~ $ grunt" will run the task "watch"
    grunt.registerTask('default', ['watch']);
}
