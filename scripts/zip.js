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


      var neighsOnly = []
      var topFiveNeighs = [];

       zipProps.map(function(elem,idx,arr){
          var zipNum = 0;
          arr.forEach(function(obj){
            if(obj.neighborhood===elem.neighborhood){
                 zipNum=zipNum+1;
               };
             });

             return {
                 neighborhood: elem.neighborhood,
                 zipCodes: zipNum
               };

        })
        .forEach(function(elem){
          if(!(neighsOnly.find(function(obj){
            return obj.neighborhood ===elem.neighborhood;
          }))){
            neighsOnly.push(elem);
          }
        });

          topFiveNeighs= neighsOnly.sort(function(a,b){
            return (b.zipCodes - a.zipCodes)
          })
          .filter(function(elem,idx,array){
               return idx<5;
             });

        console.log(topFiveNeighs);
        console.log(neighsOnly);

    });
  };

  getData();


module.zip = zip;
})(window);
