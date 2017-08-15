'use strict';
module.exports = function(grunt) {
    grunt.initConfig({

        jshint: {
            files: ['../javascripts/main.js'],
            options: {
                predef: ["document", "console", "Module", "$", ],
                esnext: true,
                globalstrict: true,
                globals: {}, //ex: {"Sandwich": true, "require": true}
                browserify: true
            }
        },

        sass: {
            dist: {
                files: {
                    '../css/styles.full.css': '../sass/styles.scss'
                }
            }
        },

        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: '../css/',
                    src: ['styles.full.css'],
                    dest: '../css/',
                    ext: '.min.css'
                }]
            }
        },

        watch: {
            javascripts: {
                files: ['../javascripts/main.js'],
                tasks: ['jshint']
            },
            sass: {
                files: ['../sass/styles.scss'],
                tasks: ['sass', 'cssmin']
            }
        }
    });

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.registerTask('default', ['jshint', 'sass', 'cssmin', 'watch']);
};
