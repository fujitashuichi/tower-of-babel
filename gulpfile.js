// ================================ \\
// REQUIRE PLUGINS
// ================================ //
// Using
var gulp = require('gulp');
var plumber = require('gulp-plumber');
var babel = require('gulp-babel');
var xto6 = require('gulp-xto6');
var watch = require('gulp-watch');

// ================================ \\
// TASKS
// ================================ //

// Babel
gulp.task('babel', function() {
    var files = ['./es6/*.js'];
    gulp.src(files)
        .pipe(plumber())
        .pipe(babel())
        .pipe(gulp.dest('./dist/to-js'));
});

// Xto6
gulp.task('xto', function() {
    gulp.src('./js/*.js')
        .pipe(plumber())
        .pipe(xto6())
        .pipe(gulp.dest('./dist/to-es6'));
});

// ================================ \\
// DEFAULT TASK (WATCH)
// ================================ //
gulp.task('default', function() {
    var watch_files = ['./es6/**/*.js', './js/**/*.js'];
    gulp.watch(watch_files, ['babel', 'xto']);
});
