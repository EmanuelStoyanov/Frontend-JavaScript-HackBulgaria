"use strict";


var beerAndFries = function(item){

  var beers = [];
  var fries = [];

  item.forEach(function(value){
    if(value.type==="beer"){
      beers.push(value.score);
    }
    else{
      fries.push(value.score);
    }
  });

  beers.sort(function(a,b) {
    return a - b;
  } );


  fries.sort(function(a,b) {
    return a - b;
  } );

  var beersAndFries = zip([beers, fries]),
      result =0;

  beersAndFries.forEach(function(value){
    result += multiple(value);
  });
  console.log(result);
  return result;


};


function zip(arrays) {
    return arrays[0].map(function(_,i){
        return arrays.map(function(array){return array[i];});
    });
}


var multiple = function(beerAndFriesScores){
  var result = 1;

  beerAndFriesScores.forEach(function(value){
    result *= value;
  });
  return result;
};



exports.beerAndFries = beerAndFries;
