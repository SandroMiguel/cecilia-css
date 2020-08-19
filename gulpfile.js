const gulp = require("gulp");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");
const rename = require("gulp-rename");
const sourcemaps = require("gulp-sourcemaps");
const sass = require("gulp-sass");
const cssnano = require("gulp-cssnano");
const gulpIf = require("gulp-if");
const del = require("del");
const runSequence = require("run-sequence");

const baseFolder = {
  src: "src/",
  dest: "dist/",
};

const path = {
  src: {
    scss: `${baseFolder.src}**/*.scss`,
    img: `${baseFolder.src}**/*.+(png|jpg|gif|svg)`,
  },
  dest: {
    css: `${baseFolder.dest}*.css`,
    map: `${baseFolder.dest}*.map`,
  },
};

/**
 * CSS tasks.
 */
const css = () => {
  return gulp
    .src(path.src.scss)
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(sourcemaps.write(""))
    .pipe(gulp.dest(baseFolder.dest))
    .pipe(gulpIf("*.css", cssnano()))
    .pipe(gulpIf("*.css", rename({ suffix: ".min" })))
    .pipe(gulpIf("*.css", sourcemaps.write("")))
    .pipe(gulp.dest(baseFolder.dest));
};

/**
 * Clean CSS.
 */
const cleanCss = () => del(path.dest.css).then((paths) => console.log("Deleted file:\n", paths.join("\n")));

/**
 * Clean maps.
 */
const cleanMaps = () => del(path.dest.map).then((paths) => console.log("Deleted file:\n", paths.join("\n")));

/**
 * Watch.
 */
const watch = () => gulp.watch(path.src.scss, css);

/**
 * Sass watch.
 */
const sassWatch = () => gulp.series(css, watch);

/**
 * Production build.
 */
const build = gulp.series(gulp.parallel(cleanCss, cleanMaps), css, watch);

exports.css = css;
exports.cleanCss = cleanCss;
exports.cleanMaps = cleanMaps;
exports.watch = watch;
exports.sassWatch = sassWatch;
exports.default = build;
