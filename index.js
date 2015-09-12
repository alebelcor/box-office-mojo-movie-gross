'use strict';

var cheerio = require('cheerio');

function getGrossAsNumber(grossStr) {
  var unformattedNumber = grossStr
    .replace('Domestic Lifetime Gross:', '')
    .replace('(Estimate)', '')
    .replace(/\$*,*/g, '')
    .trim();

  return parseInt(unformattedNumber, 10);
}

function getLifetimeGrossElement($) {
  return $('td:first-of-type > font:nth-of-type(2) > a > b').text();
}

function getDomesticGrossElement($) {
  return $('td:first-of-type > font > b:last-child').text();
}

function getGrossAsText($) {
  var gross = getLifetimeGrossElement($) || getDomesticGrossElement($);

  return gross || '0';
}

module.exports = function (html) {
  if (typeof html !== 'string') {
    throw new Error('Parameter must be a string of HTML');
  }

  return getGrossAsNumber(getGrossAsText(cheerio.load(html)));
};
