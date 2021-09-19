var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
let image = require('gulp-image');

sass.compiler = require('node-sass');
 
gulp.task('scss', function () {
  return gulp.src('./src/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});
 
gulp.task('scss:watch', function () {
  gulp.watch('./src/**/*.scss', gulp.series(['scss']));
});
gulp.task('img' , function (){
  return gulp.src('./img/**/*')
      .pipe(image())
      .pipe(gulp.dest('./dist/img'))
})