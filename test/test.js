'use strict';

var fs = require('fs');
var path = require('path');

var test = require('ava');
var boxOfficeMojoMovieGross = require('../');

var FIXTURE_DIR = path.resolve('.', 'fixture');

test('it should get the domestic lifetime gross instead of the estimate gross', function (t) {
  var fixture = fs.readFileSync(path.join(FIXTURE_DIR, 'lifetime.html'), 'utf8');

  t.same(315544750, boxOfficeMojoMovieGross(fixture));
  t.end();
});

test('it should get the estimate gross when there\'s no domestic total', function (t) {
  var fixture = fs.readFileSync(path.join(FIXTURE_DIR, 'estimate.html'), 'utf8');

  t.same(420142336, boxOfficeMojoMovieGross(fixture));
  t.end();
});

test('it should remove any formatting characters and labels', function (t) {
  var fixture = fs.readFileSync(path.join(FIXTURE_DIR, 'domestic.html'), 'utf8');

  t.same(107928762, boxOfficeMojoMovieGross(fixture));
  t.end();
});

test('it should return a number', function (t) {
  var fixture = fs.readFileSync(path.join(FIXTURE_DIR, 'domestic.html'), 'utf8');

  t.same('number', typeof boxOfficeMojoMovieGross(fixture));
  t.end();
});

test('it should return zero when there\'s no gross or it can\'t find it', function (t) {
  var fixture = fs.readFileSync(path.join(FIXTURE_DIR, 'no-domestic.html'), 'utf8');

  t.same(0, boxOfficeMojoMovieGross(fixture));
  t.end();
});

test('it should throw an error when nothing was passed in', function (t) {
  t.throws(function () { return boxOfficeMojoMovieGross(); });
  t.end();
});
