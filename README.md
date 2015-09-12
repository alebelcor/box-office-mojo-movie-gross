# box-office-mojo-movie-gross

> Get the gross of a Box Office Mojo's movie via its HTML

## Install

```bash
npm install --save box-office-mojo-movie-gross
```

## Usage

```js
var boxOfficeMojoGross = require('box-office-mojo-movie-gross');
var pulpFictionHTML = '<table><tbody><tr><td><font>Domestic Total Gross: <b>$107,928,762</b></font></td></tr></tbody></table>';

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
