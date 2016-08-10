var gulp=require("gulp");
var	connect=require("gulp-connect");
var	sass=require('gulp-ruby-sass');
//起服务
gulp.task('connect',function(){
    connect.server({
        livereload: true,
        prot:8001,
    })
})
//刷新所有html
gulp.task('html',function(){
    gulp.src('*.html')
        .pipe(connect.reload());
})
//监听所有html文件，改动了触发上一条任务
gulp.task('watch',function(){
    gulp.watch(['*.html','css/*.css'],['html'])
})
//default默认起服务和监听
gulp.task('default',['connect','watch'])
 