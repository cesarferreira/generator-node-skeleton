const Chalk = require('chalk');
const updateNotifier = require('update-notifier');
const log = require('node-time-log').SimpleLog;
const pkg = require('./package.json');

// This will notify the user to update the
// Package if a new version is released
updateNotifier({pkg}).notify();

// Main code //
log(`Hello ${Chalk.green('world')}!`);
