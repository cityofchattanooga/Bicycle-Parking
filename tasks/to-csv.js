var fs = require('fs')
  , _ = require('lodash')
  , stringify = require('csv-stringify');

fs.readFile('bicycle_parking.geojson', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
   
  var dta = _.map(JSON.parse(data).features, function(i){
    var p = i.properties
      , coords = i.geometry.coordinates;

    var rowstr = [p.name, p.type, p.capacity, '(' + coords[1] + ', ' + coords[0] + ')'];

      return rowstr;
  })
    , header = ['name','type','capacity','location_1'];

  stringify([header].concat(dta), function(err, d){
    fs.writeFile('bicycle_parking.csv', d, function (err) {
    if (err) return console.log(err);
      console.log('The file has now been written to bicycle_parking.csv');
    });
  });
});
