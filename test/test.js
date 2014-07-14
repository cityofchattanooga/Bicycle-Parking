var assert = require('geojson-assert')
  , fs = require('fs');

describe('bicycle_parking.geojson', function() {
  it('should should be a valid GeoJSON file',function(done){
    fs.readFile('bicycle_parking.geojson', {encoding:'utf8'}, function(err,result){

      if (err) {
        return done(err);
      }

      done(assert(result));
  
    });
  });
});
