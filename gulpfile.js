'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');

var paths = {
    theme: {
        sass: 'assets/sass/*.scss',
        outputCss: 'assets/css/',
        outFile: 'style.css',
    }
};

/**
 * Runs the gulp-sass plugin to compile and minify the SASS output
 * @param {string} src - The .sass files location
 * @param {string} dest - The destination folder, where the compiled files shall be stored
 * @param {string} outputName - The destination file where the sass shoud be compiled
 */
function runSass (src, dest, outputName) {
  var task = gulp.src(src)
  .pipe(sass.sync().on('error', sass.logError));

  if (outputName) {
      task.pipe(rename(outputName));
  }
  task.pipe(gulp.dest(dest));
}

/**
 * Executes the runSass function using the theme's paths
 * @see runSass
 */
gulp.task('theme-sass', function () {
  runSass(paths.theme.sass, paths.theme.outputCss, paths.theme.outFile);
});

/**
 * Watches the theme related files and run the following tasks:
 * - theme-sass
 */
gulp.task('watch-theme', function () {
  gulp.watch(paths.theme.sass, ['theme-sass']);
});