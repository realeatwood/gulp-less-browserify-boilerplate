import config from '../config';
import gulp from 'gulp';
import merge from 'merge-stream';
import templateCache from 'gulp-angular-templatecache';
import browserSync from 'browser-sync';

// Views task
gulp.task('views', function() {

  // Put our index.html in the dist folder
  const indexFile = gulp.src(config.views.watch)
    .pipe(gulp.dest(config.buildDir))
    .pipe(browserSync.stream());

  // Process any other view files from app/views
  // const views = gulp.src(config.views.src)
  //   .pipe(templateCache({
  //     standalone: true
  //   }))
  //   .pipe(gulp.dest(config.views.dest));

  // return merge(indexFile, views);

});