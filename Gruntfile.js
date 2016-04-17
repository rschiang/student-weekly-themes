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
                    paths: ['src/'],
                    plugins: [
                        new (require('less-plugin-clean-css'))({ advanced: true, mediaMerging: true })
                    ],
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
