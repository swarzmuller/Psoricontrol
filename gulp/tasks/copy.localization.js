'use strict';

module.exports = function() {
  $.gulp.task('copy:localization', function() {
    return $.gulp.src('./source/localization/**/*.*', { since: $.gulp.lastRun('copy:localization') })
      .pipe($.gulp.dest($.config.root + '/localization'));
  });
};
