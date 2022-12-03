const gulp = require("gulp"),
    gulpConcat = require("gulp-concat"),
    webp = require("gulp-webp"),
    babel = require("gulp-babel"),
    cssPrefix = require("gulp-autoprefixer"),
    minify = require("gulp-minify"),
cleanCss = require("gulp-clean-css");

gulp.task("boca-css", function () {
    return gulp.src("project/css/*.css")
        .pipe(cssPrefix("last 2 versions"))
        .pipe(gulpConcat("style.css"))
        .pipe(cleanCss())
        .pipe(gulp.dest("dist/css"));
});

gulp.task("boca-js", function () {
    return gulp.src("project/js/*.js")
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulpConcat("root.js"))
        .pipe(minify())
        .pipe(gulp.dest("dist/js"));
});

gulp.task("boca-webp", function () {
    return gulp.src("project/image/*")
        .pipe(webp())
        .pipe(gulp.dest("dist/img"));
})
