# box-office-mojo-movie-gross

> Get the gross of a Box Office Mojo's movie via its HTML.

[![npm version](https://img.shields.io/npm/v/box-office-mojo-movie-gross.svg)](https://npmjs.org/package/box-office-mojo-movie-gross)
[![Build Status](https://travis-ci.org/alebelcor/box-office-mojo-movie-gross.svg)](https://travis-ci.org/alebelcor/box-office-mojo-movie-gross)
[![Test Coverage](https://img.shields.io/coveralls/alebelcor/box-office-mojo-movie-gross/master.svg)](https://coveralls.io/github/alebelcor/box-office-mojo-movie-gross)


## Install

```bash
npm install --save box-office-mojo-movie-gross
```

## Usage

```js
var boxOfficeMojoGross = require('box-office-mojo-movie-gross');
var pulpFictionHTML = '<tr><td><font>Domestic Total Gross: <b>$107,928,762</b></font>';

boxOfficeMojoGross(pulpFictionHTML); // 107928762
```

## API

### boxOfficeMojoGross(input)

Returns the gross of the Box Office Mojo's movie.

#### input

Type: `string`

The full (or partial) HTML of a movie as presented in [Box Office Mojo](http://www.boxofficemojo.com/).

Example: [Pulp Fiction's page in Box Office Mojo](http://www.boxofficemojo.com/movies/?id=pulpfiction.htm)

## License

MIT © Alejandro Beltrán
