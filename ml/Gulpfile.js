var gulp = require('gulp');
var rename = require('gulp-rename');
var sass = require('gulp-sass');

gulp.task('css', function() {
    gulp.src('public/assets/scss/**/*.scss')
        .pipe(rename({suffix: '.min'}))
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('public/assets/css/'))
});

gulp.task('default',function() {
    gulp.watch('public/assets/scss/**/*.scss',['css']);
});