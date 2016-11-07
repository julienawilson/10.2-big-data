(function(module) {
  var zip = {};

  var zipProps =[];

  getData = function() {
    $.getJSON('/data/manhattan.json', function(data) {
      // TODO: start here!
      zipProps=data.features.map(function(feat,idx){
        var newAddress;
        if(feat.properties.address){
          newAddress = feat.properties.address;
        }else{
          newAddress= null;
        }

        return {
          zip: feat.properties.zip,
          neighborhood: feat.properties.neighborhood,
          address: newAddress,
          coordinates: {
            lat: feat.geometry.coordinates[1],
            lng: feat.geometry.coordinates[0]
          }
          }
      })

       console.log(zipProps);
    });
  };

  getData();
  module.zip = zip;
})(window);
