'use strict'

const gulp = require('gulp'),
      tsc = require('gulp-typescript'),
      sourcemaps = require('gulp-sourcemaps'),
      nodemon = require('gulp-nodemon'),
      livereload = require('gulp-livereload'),
      tsProject = tsc.createProject('tsconfig.json'),
      sourceFiles = 'src/**/*.ts',
      testFiles = 'test/**/*.ts',
      outDir = require('./tsconfig.json').compilerOptions.outDir,
      entryPoint = './build/index.js';

/**
 * Copy config.json
 */
gulp.task('copy', () => {
   return gulp.src(['./config.json'])
    .pipe(gulp.dest(outDir));
});

/**
 * Compile TypeScript sources and create sourcemaps in build directory.
 */
gulp.task('compile', ['copy'], () => {
    let tsResult = gulp.src([sourceFiles, testFiles])
        .pipe(sourcemaps.init())
        .pipe(tsc(tsProject))
    return tsResult.js
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(outDir))
});

/**
 * Build the project.
 */
gulp.task('build', ['compile'], () => {
    console.log('Building the project ...')
});

/**
 * Watch typescript changes
 */
gulp.task('watch', function() {
  gulp.watch('./src/**/*.ts', ['build']);
});

gulp.task('serve', ['build', 'watch'], function () {
    nodemon({
        script: entryPoint,
        env: { 'NODE_ENV': 'development' }
    });

});