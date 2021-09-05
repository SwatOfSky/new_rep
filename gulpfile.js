'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));

sass.compiler = require('node-sass');
 
gulp.task('scss', function () {
  return gulp.src('./src//*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});
 
gulp.task('scss:watch', function () {
  gulp.watch('./src/**/*.scss', gulp.series(['scss']));
});