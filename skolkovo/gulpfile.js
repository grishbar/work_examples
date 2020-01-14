var gulp = require('gulp');
var gulpPlugins = require('gulp-load-plugins');
var babel = require('gulp-babel');
var plugins = gulpPlugins();
var plumber = require('gulp-plumber');
var concatCss = require('gulp-concat-css');
var jade = require('gulp-jade');
 
var paths = {
  styles: './src/css/**/*.scss',
  scripts: './src/js/**/*.js',
  images: './src/img/**/*',
  fonts: './src/fonts/**/*',
  //templates: './src/templates/*.jade',
  templates: './src/templates/**/*.jade',
  favicons: './favicons/**/*',
  dist: './dist',
  distStyles: './dist/stylesheets',
  distScripts: './dist/javascripts',
  distImages: './dist/img',
  distFonts: './dist/fonts',
}

var vendorCss = [
];

var vendorJs = [
  './node_modules/jquery/dist/jquery.min.js',
  './node_modules/inputmask/dist/jquery.inputmask.bundle.js',
  './node_modules/jquery-validation/dist/jquery.validate.js',
  './node_modules/almond/almond.js',
];

gulp.task('clean', function () {
  return gulp.src([
    paths.distStyles,
    paths.distScripts,
    paths.distImages,
    paths.distFonts,
    paths.dist
  ], {
      read: false,
      allowEmpty: true
  }).pipe(plugins.clean());
});

gulp.task('vendorcss', function () {
  return gulp.src(vendorCss)
    .pipe(concatCss('vendor.css'))
    .pipe(plugins.cleanCss({ restructuring: false }))
    .pipe(plugins.autoprefixer({
      browsers: ['last 3 versions'],
      cascade: false
    }))
    .pipe(gulp.dest(paths.distStyles));
});

gulp.task('styles', function() {
  return gulp
    .src([
      paths.styles,
    ])
    .pipe(plumber())
    .pipe(plugins.sourcemaps.init())
    .pipe(
      plugins.sass({
        includePaths: require('node-normalize-scss').includePaths
      })
      .on('error', plugins.notify.onError({
        title: 'Sass Error',
        subtitle: [
          '<%= error.relativePath %>',
          '<%= error.line %>'
        ].join(':'),
        message: '<%= error.messageOriginal %>',
        open: 'file://<%= error.file %>',
        onLast: true
      }))
    )
    .pipe(plugins.cleanCss({ restructuring: false }))
    .pipe(plugins.autoprefixer({
      browsers: ['last 3 versions'],
      cascade: false
    }))
    .pipe(plugins.sourcemaps.write('.'))
    .pipe(gulp.dest(paths.distStyles));
});

gulp.task('vendorjs', function() {
  return gulp
    .src(vendorJs)
    .pipe(plumber())
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.concat('vendor.js'))
    .pipe(plugins.uglify({compress: {inline: false}}))
    .pipe(plugins.sourcemaps.write('.'))
    .pipe(gulp.dest(paths.distScripts));
});

gulp.task('scripts', function() {
  return gulp
    .src(paths.scripts)
    .pipe(plumber())
    .pipe(plugins.sourcemaps.init())
    .pipe(babel({
      presets: [['env', {
        targets: {
          browsers: ['> 0.5%', 'last 2 versions', 'ie > 9']
        },
        useBuiltIns: 'entry',
      }]],
      plugins: ['transform-es2015-modules-amd'],
      "moduleIds": true,
    }))
    .pipe(plugins.concat('site.js'))
    .pipe(plugins.uglify())
    .pipe(plugins.sourcemaps.write('.'))
    .pipe(gulp.dest(paths.distScripts));
});

gulp.task('images', function() {
  return gulp
    .src(paths.images)
    .pipe(plumber())
    .pipe(plugins.imagemin())
    .pipe(gulp.dest(paths.distImages));
});

gulp.task('templates', function() {

  return gulp
    .src(paths.templates)
    .pipe(jade({
      locals: paths.jade
    }))
    .pipe(gulp.dest(paths.dist))
});

gulp.task('favicons', function() {
  return gulp
    .src(paths.favicons)
    .pipe(gulp.dest(paths.dist));
});

gulp.task('fonts', function() {
  return gulp
    .src(paths.fonts)
    .pipe(gulp.dest(paths.distFonts));
});

gulp.task('watch', function(){
  gulp.watch(paths.styles, gulp.series('styles'));
  gulp.watch(paths.scripts, gulp.series('scripts'));
  gulp.watch(paths.images, gulp.series('images'));
  gulp.watch(paths.fonts, gulp.series('fonts'));
  gulp.watch(paths.templates, gulp.series('templates'));
  gulp.watch(paths.favicons, gulp.series('favicons'));
});


gulp.task('build', gulp.series('clean', gulp.parallel('templates', 'favicons', 'fonts', 'styles', /*'vendorcss',*/ 'scripts', 'vendorjs', 'images')));

gulp.task('default', gulp.series('build', 'watch'));
