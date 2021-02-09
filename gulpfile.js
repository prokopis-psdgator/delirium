var gulp = require("gulp");
var sass = require("gulp-sass");

/**
 * Convert Sass to CSS with gulp-sass
 */
gulp.task('scss', function(){
  return gulp.src('app/scss/core.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
});

/**
 *  Watch any changes to scss files
 */
gulp.task("watch", function () {
  gulp.watch(["app/scss/**/*.scss"], gulp.task("scss"));
});

/**
 * Command 'gulp' (default)
 */
gulp.task("default", gulp.series("scss", "watch"));