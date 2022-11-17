const gulp = require("gulp"),
    gulpConcat = require("gulp-concat"),
    webp = require("gulp-webp"),
    babel = require("gulp-babel"),
    cssPrefix = require("autoprefixer"),
    minify = require("gulp-minify");

gulp.task("boca-css", function () {
    return gulp.src("project/css/*")
        .pipe(cssPrefix("last 2 versions"))
        .pipe(gulpConcat("main.css"))
        .pipe(minify())
        .pipe(gulp.dest("dist/css"));
});

gulp.task("boca-js", function () {
    return gulp.src("project/js/*")
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulpConcat("main.js"))
        .pipe(minify())
        .pipe(gulp.dest("dist/js"));
});

gulp.task("boca-webp", function () {
    return gulp.src("project/image/*")
        .pipe(webp())
        .pipe(gulp.dest("dist/img"));
})
