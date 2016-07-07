var gulp = require('gulp'),
    webserver = require('gulp-webserver'),
    typescript = require('gulp-typescript'),
    sourcemaps = require('gulp-sourcemaps'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    autoprefixer = require('gulp-autoprefixer'),
    del = require('del');
    tslint = require("gulp-tslint");
    tscConfig = require('./tsconfig.json');

var appSrc = 'builds/development/',
    sassSrc = 'sass/',
    tsSrc = 'process/typescript/';

var sassOptions = {
    errLogToConsole: true,
    outputStyle: 'compress'
};

// https://github.com/postcss/autoprefixer#options
// https://github.com/ai/browserslist#queries
var prefixerOptions = {
    browsers: ['> 5%', 'last 2 versions', 'Firefox ESR']
};

gulp.task('tslint', () =>
  gulp
    // .src("source.ts")
    .src([
      tsSrc + '**/*.ts'
    ])
    .pipe(tslint())
    .pipe(tslint.report('verbose'))
);

// https://www.npmjs.com/package/del
gulp.task('clean', function() {
  del([
    !appSrc + 'index.html',
    !appSrc + 'partials/**',
    !appSrc + 'js/lib/angular2/**',
    !appSrc + 'js/lib/bootstrap-3.3.6-dist/**',
    appSrc + 'css/*.css',
    appSrc + 'js/*.js',
    appSrc + 'js/*.js.map'
  ]).then(paths => {
    // console.log('Deleted files and folders:\n', paths.join('\n'));
  });
});

gulp.task('html', function() {
  return gulp
    .src(appSrc + '**/*.html');
});

// gulp.task('css', function() {
//   gulp.src(appSrc + '**/*.css');
// });

gulp.task('app:css', function() {
  return gulp
    .src(sassSrc + '**/*.scss')
    .pipe(sass(sassOptions))
    .pipe(concat('app.css'))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(appSrc + 'css'));
});

gulp.task('app:css:prefix', ['app:css'], function() {
  return gulp
    .src(appSrc + 'css/app.css')
    .pipe(autoprefixer(prefixerOptions))
    .pipe(gulp.dest(appSrc + 'css'));
});

gulp.task('copylibs', function() {
  return gulp
    .src([
      'node_modules/angular2/typings/browser.d.ts',
      'node_modules/es6-shim/es6-shim.min.js',
      'node_modules/systemjs/dist/system-polyfills.js',
      'node_modules/angular2/bundles/angular2-polyfills.js',
      'node_modules/systemjs/dist/system.src.js',
      'node_modules/rxjs/bundles/Rx.js',
      'node_modules/angular2/bundles/angular2.dev.js'
    ])
    .pipe(gulp.dest(appSrc + 'js/lib/angular2'));
});

gulp.task('typescript', function () {
  return gulp
    .src([
      'node_modules/angular2/typings/browser.d.ts',
      tsSrc + '**/*.ts'
      ])
    .pipe(sourcemaps.init())
    .pipe(typescript(tscConfig.compilerOptions))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(appSrc + 'js/'));
});

gulp.task('watch', function() {
  gulp.watch(tsSrc + '**/*.ts', ['typescript']);
  // gulp.watch(appSrc + 'css/*.css', ['css']);
  gulp.watch(sassSrc + '**/*.scss', ['app:css','app:css:prefix']);
  gulp.watch(appSrc + '**/*.html', ['html']);
});

gulp.task('webserver', function() {
  gulp.src(appSrc)
    .pipe(webserver({
      livereload: true,
      open: true
    }));
});

gulp.task('default', ['tslint', 'clean', 'app:css', 'app:css:prefix', 'copylibs', 'typescript', 'watch', 'webserver']);
