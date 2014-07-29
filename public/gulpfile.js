var gulp       = require('gulp'),
    jade       = require('gulp-jade'),
    livereload = require('gulp-livereload'),
    watch      = require('gulp-watch');

gulp.task('templates', function(){
  var YOUR_LOCALS = {};

  gulp.src('./app/*.jade')
    .pipe(watch())
    .pipe(jade({
      locals: YOUR_LOCALS
  }))

  .pipe(gulp.dest('./public/'))
  .pipe(livereload());
});
