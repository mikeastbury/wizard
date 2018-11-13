var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    minifyCSS = require('gulp-clean-css'),
    notify = require('gulp-notify'),
    plumber = require('gulp-plumber'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    babel = require('gulp-babel');
// uglify = require('gulp-uglify');

gulp.task('bs', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('styles', function() {
    return gulp.src('./sass/**/*.scss')
        .pipe(plumber({
            errorHandler: notify.onError("Error: <%= error.message %>")
        }))
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(minifyCSS())
        .pipe(concat('style.css'))
        .pipe(autoprefixer('last 5 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./'))
        .pipe(reload({ stream: true }));
});

gulp.task('scripts', function() {
    return gulp.src([
            'node_modules/babel-polyfill/dist/polyfill.js',
            'node_modules/whatwg-fetch/fetch.js',
            './js/scripts.js'
        ])
        .pipe(babel({
            "presets": [
                [
                    "env",
                    {
                        "targets": {
                            "browsers": ["ie>8"]
                        }
                    }
                ]
            ]
        }))
        .pipe(plumber({
            errorHandler: notify.onError("Error: <%= error.message %>")
        }))
        .pipe(concat('main.min.js'))
        //.pipe(uglify())
        .pipe(gulp.dest('./js'))
        .pipe(reload({ stream: true }));
});

// configure which files to watch and what tasks to use on file changes
gulp.task('watch', function() {
    gulp.watch('sass/**/*.scss', ['styles']);
    gulp.watch('./js/**/*.js', ['scripts']);
    gulp.watch('./**/*.html', reload);
});

gulp.task('default', ['styles', 'scripts', 'bs', 'watch']);