var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    order = require('gulp-order'),
    uglifycss = require('gulp-uglifycss'),
    uglifyjs = require('gulp-uglify'),
    mmq = require('gulp-merge-media-queries');

var cssDest = "./../assets/css/";

gulp.task('styles', function() {
    gulp.src('scss/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('style.css'))
        .pipe(gulp.dest(cssDest))
        .pipe(rename('style.min.css'))
        .pipe(uglifycss())
        .pipe(gulp.dest(cssDest));
});

var jsDest = "./../assets/js/";

gulp.task('scripts', function() {
    return gulp.src('js/source/*.js')
        .pipe(order([
            'js/source/main.js',
            'js/source/burger.js',
        ]))
        .pipe(concat('source.js'))
        .pipe(gulp.dest(jsDest))
        .pipe(rename('source.min.js'))
        .pipe(uglifyjs())
        .pipe(gulp.dest(jsDest));
});

gulp.task('scriptsVendors', function() {
    return gulp.src('js/vendors/*.js')
        .pipe(order([
            'js/vendors/slick.js',
            'js/vendors/jquery.js',
        ]))
        .pipe(concat('vendors.js'))
        .pipe(gulp.dest(jsDest))
        .pipe(rename('vendors.min.js'))
        .pipe(uglifyjs())
        .pipe(gulp.dest(jsDest));
});

//Watch task
gulp.task('default',function() {
    gulp.watch('scss/**/**/*.scss',['styles']);
    gulp.watch('js/source/**/*.js',['scripts']);
    gulp.watch('js/vendors/**/*.js',['scriptsVendors']);
});

gulp.task('setup', ['styles']);
gulp.task('setup', ['scripts']);
