var gulp = require('gulp');
var concat = require('gulp-concat-css');
var minifyCss = require('gulp-minify-css');
var del = require('del');

gulp.task('concat', function(){
	del('css/app.min.css')
	return gulp.src(['css/main.min.css', 'css/main.css'])
	.pipe(concat('app.min.css'))
	.pipe(minifyCss())
	.pipe(gulp.dest('./css/'))
});

gulp.task('watch', function(){
	gulp.watch('css/main.css', ['concat'])
})

gulp.task('default', function(){

});
