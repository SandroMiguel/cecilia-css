const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const cssnano = require('gulp-cssnano');
const gulpIf = require('gulp-if');
const del = require('del');
const runSequence = require('run-sequence');

const baseFolder = {
    src  : 'src/',
    dest : 'dist/',
};

const path = {
    src: {
        scss : `${baseFolder.src}**/*.scss`,
        img  : `${baseFolder.src}**/*.+(png|jpg|gif|svg)`,
    },
    dest: {
        css  : `${baseFolder.dest}*.css`,
        map  : `${baseFolder.dest}*.map`,
    },
};

gulp.task('sass', () => gulp
    .src(path.src.scss)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write(''))
    .pipe(gulp.dest(baseFolder.dest))
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulpIf('*.css', rename({suffix: '.min'})))
    .pipe(gulpIf('*.css', sourcemaps.write('')))
    .pipe(gulp.dest(baseFolder.dest)));

gulp.task('clean-css', () => del(path.dest.css)
    .then(paths => console.log('Deleted file:\n', paths.join('\n'))));

gulp.task('clean-maps', () => del(path.dest.map)
    .then(paths => console.log('Deleted file:\n', paths.join('\n'))));

// Watch
gulp.task('watch', () => {
    gulp.watch(path.src.scss, ['sass']);
});

// Default
gulp.task('default', () => runSequence(['sass'], 'watch'));

// Production build
gulp.task('build', () => runSequence(['clean-css', 'clean-maps'], 'sass'));
