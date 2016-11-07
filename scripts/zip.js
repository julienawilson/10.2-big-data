(function(module) {
  var zip = {};

  var zipProps =[];

  getData = function() {
    $.getJSON('/data/manhattan.json', function(data) {
      // TODO: start here!
      zipProps=data.features.map(function(feat,idx){

        var newArray=[];
        $.each(feat.properties, function(key,val){
          newArray.push(val);
        });
        return newArray;
      });

       console.log(zipProps);
    });
  };

  getData();
  module.zip = zip;
})(window);
