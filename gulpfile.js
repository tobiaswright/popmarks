var gulp = require('gulp');
var webpack = require('webpack-stream');
gulp.task('default', function() {
    gulp.src('src/app.js')
  .pipe(webpack( require('./webpack.config.js') ))
  .pipe(gulp.dest('dist/assets'));
});
gulp.task('moveindex', function() {
    gulp.src('src/index.html')
  .pipe(gulp.dest('dist/'));
});