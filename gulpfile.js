'use strict'

const gulp = require('gulp'),
      tsc = require('gulp-typescript'),
      clean = require('gulp-clean'),
      sourcemaps = require('gulp-sourcemaps'),
      nodemon = require('gulp-nodemon'),
      tsProject = tsc.createProject('tsconfig.json'),
      sourceFiles = 'src/**/*.ts',
      testFiles = 'test/**/*.ts',
      outDir = require('./tsconfig.json').compilerOptions.outDir,
      entryPoint = './build/index.js';

/**
 * Remove build directory.
 */
gulp.task('clean', () => {
    return gulp.src(outDir, { read: false })
        .pipe(clean({force: true}));
});

/**
 * Compile TypeScript sources and create sourcemaps in build directory.
 */
gulp.task('compile', ['clean'], () => {
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


gulp.task('nodemon', ['build'], () => {
    nodemon({
        script: entryPoint,
        env: { 'NODE_ENV': 'development' },
        tasks: ['build']
    })
})