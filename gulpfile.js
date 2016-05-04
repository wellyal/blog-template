'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var gutil = require( 'gulp-util' );
var ftp = require( 'vinyl-ftp' );

gulp.task('transpile-scss', function() {
    gulp.src('assets/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(rename('style.css'))
    .pipe(gulp.dest('assets/css/'))
});

//Watch task
gulp.task('default', function() {
    gulp.watch('assets/**/*.scss', ['transpile-scss']);
});

//Task to deploy prod
gulp.task( 'deploy', function () {

    var conn = ftp.create( {
        host:     'ftp.code4dummies.com',
        user:     'code4dummies',
        password: 'arckanos123',
        parallel: 10,
        log:      gutil.log
    } );

    var globs = [
        'assets/**',
        'index.html'
    ];

    return gulp.src( globs, { base: '.', buffer: false } )
        .pipe( conn.newer( '/public_html' ) ) // only upload newer files
        .pipe( conn.dest( '/public_html' ) );
} );
