var gulp         = require('gulp');
var sass         = require('gulp-sass');
var postcss      = require('gulp-postcss');
var autoprefixer = require('gulp-autoprefixer');
var mqpacker     = require('css-mqpacker');
var csso         = require('gulp-csso');

gulp.task('default', function() {
  var processors = [
    mqpacker
  ];
  return gulp.src('./src/topcoat.scss')
    .pipe(sass({includePaths: ['./src']}))
    .pipe(autoprefixer())
    .pipe(postcss(processors))
    .pipe(gulp.dest('./css'))
    .pipe(csso())
    .pipe(gulp.dest('./dist'));
});
