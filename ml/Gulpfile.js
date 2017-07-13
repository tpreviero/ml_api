var gulp = require('gulp');
var sass = require('gulp-sass');
var uglifycss = require('gulp-uglifycss');
var rename = require('gulp-rename');

gulp.task('styles', function() {
    gulp.src('public/assets/sass/**/*.scss')
        .pipe(uglifycss({
            "maxLineLen": 80,
            "uglyComments": true
        }))
        .pipe(rename({suffix: '.min'}))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('public/assets/css/'))
});

gulp.task('default',function() {
    gulp.watch('public/assets/sass/**/*.scss',['styles']);
});