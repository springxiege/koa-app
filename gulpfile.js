var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var less = require('gulp-less');
gulp.task('less', function () {
    gulp.src('./public/css/*.less')
        .pipe(less())
        .pipe(gulp.dest(function (f) {
            return f.base;
        }))
});
gulp.task('start', () => {
    var stream = nodemon({
        script: 'bin/www',
        env: { 
            'NODE_ENV': 'development',
            'PORT': 3001
        },
        ignore: [
            'node_modules/',
            'package.json'
        ],
        ext: 'js html less css',
        watch: ['/app/**', '/public/**']
    })
    stream.on('restart', () => {
        console.log('restarted')
    })
    .on('crash', () => {
        console.error('Application has crashed!\n');
        // restart the server in 3 seconds
        stream.emit('restart', 3)

    });
    gulp.watch('./app/**', (files) => {
        stream.emit('restart',1);
    });
    gulp.watch('./public/**', ['less'], (files) => {
        // console.log('public->', files)
        stream.emit('restart', 1);
    })
    
})
// gulp.task('default' ['start'], () => {
//     gulp.watch('./app/**/*.html', ['start']);
//     gulp.watch('./public/**/.(js|css|less)', ['start']);
// })