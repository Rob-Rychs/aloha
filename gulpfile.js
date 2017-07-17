'use strict';
const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const uglify = require('gulp-uglify');
const pump = require('pump');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');
const browserSync = require('browser-sync').create();
const browserify = require('browserify');

/* need to minify and change extension name
.pipe(uglify())
.pipe(rename({ extname: '.min.css' })) */
gulp.task('autoprefix', () =>
    gulp.src('./styles/*.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        })),
        gulp.dest('./dist/styles')
);


gulp.task('compress', function (cb) {
  pump([
        gulp.src('./js/*.js'),
        browserify(),
        sourcemaps.init(),
        uglify(),
        rename({ extname: '.min.js'}),
        sourcemaps.write(),
        gulp.dest('dist/js')
    ],
    cb
  );
});

gulp.task('js-watch', ['compress'], function (done) {
  browserSync.reload();
  done();
});

gulp.task('default', ['autoprefix', 'compress'], function() {
  browserSync.init({
    server: {
      baseDir: "./"
    },
    logFileChanges: false
  });
  gulp.watch('./js/*.js', ['compress']);
  gulp.watch('./styles/*.css', ['autoprefix']);
  gulp.watch('./*.html', './styles/*.css', './js/*.js', ['js-watch']);

});

gulp.task('watch', function() {
  gulp.watch('./js/*.js', ['compress']);
  gulp.watch('./styles/*.css', ['autoprefix']);
  gulp.watch('./*.html', './styles/*.css', './js/*.js', ['js-watch']);
});

