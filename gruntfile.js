module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        //grunt-contrib-sass
        sass: {
            options: {
                style: 'expanded',
                sourcemap: 'none',
                noCache: true
            },
            dist:{
                files: [{
                    expand: true,
                    cwd: 'scss',
                    src: ['*.scss'],
                    dest: 'css',
                    ext: '.css'
                }]
            }
        },
        //grunt-assemble templating
        assemble: {
            options: {
                layout: 'default.hbs',
                layoutdir: 'layouts',
                partials: 'includes/*.hbs',
                data: 'data/*.hbs',
                ext: '.html',
                flatten: true,
                plugins: ['permalinks']
            },
            site: {
                options: {
                    data: ['data/**/*.{json,yml}'],
                },
                src: ['templates/*.hbs'],
                dest: 'html/',
                files: {'html/': ['template/*.hbs']}
            }
        },
        watch: {
            scripts: {
                files: ['scss/*.scss' , '*/*.hbs' ],
                tasks: ['sass', 'assemble'],
                options: {
                    reload: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-assemble');
    grunt.registerTask('default', ['watch']);

};