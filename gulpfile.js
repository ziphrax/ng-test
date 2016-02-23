var gulp = require('gulp'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify');

gulp.task('default',['libs-js','minify-js'],function(){

});

gulp.task('libs-js',function(){
  return gulp.src([
    'bower_components/jquery/dist/jquery.min.js',
    'bower_components/bootstrap/dist/js/bootstrap.min.js',
    'bower_components/angular/angular.min.js',
  ])
    .pipe(concat('libs.min.js'))
    .pipe(gulp.dest('dist/js/'));
  });

gulp.task('minify-js',function(){
  return gulp.src(['app/**/*.js'])
    .pipe(concat('app.js'))
    .pipe(gulp.dest('dist/js/'))
    .pipe(uglify())
    .pipe(rename({suffix:'.min'}))
    .pipe(gulp.dest('dist/js/'));
  });

gulp.task('watch',['default'],function(){
  gulp.watch('app/**/*.js',['minify-js']);
});
