var gulp         = require('gulp'),
    sass         = require('gulp-sass'),
    postcss      = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssnano      = require('gulp-cssnano'),
    uglify       = require('gulp-uglify'),
    concat       = require('gulp-concat'),
    sourcemaps   = require('gulp-sourcemaps');
    //flatten      = require('gulp-flatten');


/*
 * Processing & compiling styles.
 */

gulp.task('styles', function() {
    return gulp.src('./assets/sass/*')
        .pipe(sourcemaps.init())
            .pipe(sass().on('error', sass.logError))
            .pipe(postcss([ autoprefixer() ]))
            .pipe(concat('style.min.css'))
            .pipe(cssnano())
            //.pipe(flatten()) // Ignore directory hierarchy.
        .pipe(sourcemaps.mapSources(function(sourcePath, file) {
            return '../../sass/' + sourcePath;
        }))
        .pipe(sourcemaps.write('../../sass/maps'))
        .pipe(gulp.dest('./assets/dist/css'));
});


/*
 * Processing JS.
 */

gulp.task('scripts', function() {
    return gulp.src([
            //'./node_modules/slick-carousel/slick/slick.js', // Uncomment import @ bottom of style.scss
            //'./assets/js/burger.js',
            './assets/js/seb.js'
        ])
        .pipe(sourcemaps.init())
        .pipe(concat('scripts.min.js'))
        .pipe(uglify())
        .pipe(sourcemaps.mapSources(function(sourcePath, file) {
            return '../../js/' + sourcePath;
        }))
        .pipe(sourcemaps.write('../../js/maps'))
        .pipe(gulp.dest('./assets/dist/js'));
});


/*
 * Watch tasks.
 */

gulp.task('default', function()
{
    gulp.watch("assets/sass/*", gulp.series('styles'));
    gulp.watch("assets/js/*", gulp.series('scripts'));
});