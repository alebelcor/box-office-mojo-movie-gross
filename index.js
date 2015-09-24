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
  return $('font:nth-child(3) > a > b').text();
}

function getDomesticGrossElement($) {
  return $('tr:nth-child(1) > td > font:nth-child(1) > b').text();
}

function getGrossAsText($) {
  var gross = getLifetimeGrossElement($) || getDomesticGrossElement($);

  if (gross.length === 0) {
    gross = '0';
  }

  return gross;
}

module.exports = function (html) {
  if (typeof html !== 'string') {
    throw new Error('Parameter must be a string of HTML');
  }

  return getGrossAsNumber(getGrossAsText(cheerio.load(html)));
};
