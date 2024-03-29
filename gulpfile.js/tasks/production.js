var config = require('../config');
var gulp = require('gulp');
var gulpSequence = require('gulp-sequence');
var getEnabledTasks = require('../lib/getEnabledTasks');

var productionTask = function(cb) {
  global.production = true;
  var tasks = getEnabledTasks('production');
  gulpSequence('clean', tasks.assetTasks, tasks.codeTasks, config.tasks.critical.enabled ? 'critical' : null, config.tasks.production.rev ? 'rev' : false, 'size-report', cb)
}

gulp.task('production', productionTask);
module.exports = productionTask;
