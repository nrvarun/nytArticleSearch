var gulp = require('gulp');
var browsersync = require('browser-sync').create();
var gutil = require('gulp-util');

gulp.task('default',function(){
	gutil.log('Gulp is running');
});

gulp.task('task1',['default'],function () {
	 gutil.log('Task 2 is running');
})

