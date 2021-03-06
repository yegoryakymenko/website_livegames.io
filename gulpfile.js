const
    gulp = require('gulp'),
    nunjucksRender = require('gulp-nunjucks-render'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch'),
    cleanCSS = require('gulp-clean-css'),
    autoprefixer = require('gulp-autoprefixer'),
    imagemin = require('gulp-imagemin');





gulp.task('html', () =>
    gulp.src("src/*.html")
        .pipe(nunjucksRender())
        .pipe(gulp.dest("./dist/"))
);

gulp.task('sass', function () {
    return gulp.src('src/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 10 versions'],
            cascade: true
        }))
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(gulp.dest('./dist/css/'))
});

gulp.task('js', function () {
    return gulp.src('src/js/*.js')
        .pipe(gulp.dest('./dist/js/'))
});

gulp.task('imagemin', () =>
    gulp.src('dist/img/**')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'))
);

gulp.task('default', ['html', 'sass'], function () {
    gulp.watch('./src/**/*.js', ['js']);
    gulp.watch('./src/**/*.scss', ['sass']);
    gulp.watch("./src/**/*.html", ['html']);
});
