'use strict'

const gulp = require('gulp'),
      tsc = require('gulp-typescript'),
      clean = require('gulp-clean');

/**
 * Remove build directory.
 */
gulp.task('clean', function() {
    return gulp.src(outDir, { read: false })
        .pipe(clean({force: true}));
});
