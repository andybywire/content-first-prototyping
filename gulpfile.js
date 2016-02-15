var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    sequence = require('gulp-sequence'),
    sourcemaps = require('gulp-sourcemaps'),
    sass = require('gulp-sass'),
    s2j = require('gulp-sheets2json');
 
var sassPaths = [
    'bower_components/foundation-sites/scss',
    'bower_components/motion-ui/src'
];
 
gulp.task("json", function () {
    gulp.src("_data/_data.xlsx")
        .pipe(s2j())
        .pipe(gulp.dest('_data'));
});

gulp.task('jekyll', function (gulpCallBack){  //builds jekyll site (but does not compile css)
    var spawn = require('child_process').spawn;
    var jekyll = spawn('jekyll', ['build'], {stdio: 'inherit'});

    jekyll.on('exit', function(code) {
        gulpCallBack(code === 0 ? null : 'ERROR: Jekyll process exited with code: '+code);
    });
});

gulp.task('sass', function() {
  return gulp.src('scss/app.scss')
    .pipe(sourcemaps.init()) 
    .pipe(sass({
      includePaths: sassPaths
    })
      .on('error', sass.logError))
    .pipe(sourcemaps.write()) 
    .pipe(gulp.dest('_site/css'))
    .pipe(browserSync.stream());
});

gulp.task('serve', function() {
    browserSync.init({
      server: "./_site",
      notify: false
    });
});

gulp.task('reload', ['jekyll'], function() {
    browserSync.reload({
    });
});

gulp.task('data', function (done){
    sequence('json', 'reload', done);
});

gulp.task('default', function(done) {
    sequence('json', 'sass', 'jekyll', 'serve', done);
    gulp.watch(['_data/_data.xlsx'], ['data']);
    gulp.watch(['**/*.html', '!_site/**/*.html', 'js/*.js', '*.md', '_posts/*.md', 'collections/**/*.md', '_config.yml', 'img/*'], ['reload']);
    gulp.watch(['scss/**/*.scss'], ['sass']);
});
