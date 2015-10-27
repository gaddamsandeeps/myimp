module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        jsDir: 'public/js/',
        cssDir: 'public/css/',
        scssDir: 'public/scss/',
        cssDistDir: 'public/dist/css/',
        pkg: grunt.file.readJSON('package.json'),
        jasmine: {
            js: {
                options: {
                    specs: 'test/*_spec.js',
                    template: require('grunt-template-jasmine-requirejs')
                }
            }
        },

        copy: {
            getProd: {
                files: [{
                     expand: true,
                    cwd: 'public/js/src/templates',
                    src: '**/*.js',
                    dest: 'public/js/min/templates',
                    flatten: true,
                    filter: 'isFile'
                }]
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'expanded',
                    /* nested / compact/ compressed / expanded  */
                    trace: true,
                    debugInfo: false,
                    lineNumbers: true,
                    update: false,
                    sourcemap: "none"
                },
                files: [{
                    expand: true,
                    cwd: 'public/scss',
                    src: ['*.scss', '**/*.scss'],
                    dest: 'public/css',
                    ext: '.css'
                }]

            }
        },
        jshint: {
            all: ['gruntfile.js', 'config/**/*.js', 'app/**/*.js'],
             options: {
                    
                   
                }
            },
        "jsbeautifier" : {
            files : ["public/js/src/**/*.js"],
            options : {
            }
        },
       requirejs: {
           	compile:{
            options: {
                appDir:"public/js",
                baseUrl: './',
                dir :"public/build",
                removeCombined: true,
                findNestedDependencies: true,
                mainConfigFile: "public/js/requireConfig.js",
                skipDirOptimize :true,
                modules :[
                    {
                            name:"depModules/home/dep"
                    }
                   

                ]
            }
         }
        },
        watch: {
            files: ['<%=jsDir%>*.js', '<%=scssDir%>/**/*.scss'],
            tasks: ['sass']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.registerTask("optimize", ["requirejs"]);    
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks("grunt-jsbeautifier");

    // Default task(s).
    grunt.registerTask('default', ['watch']);


};
