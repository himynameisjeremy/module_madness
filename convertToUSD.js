
var jabbaTheHut = function(princessLeia){
  var luke = parseInt(princessLeia);
  return "$" + luke.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
};

/*function toUSD(number) {
    var number = number.toString(),
    dollars = number.split('.')[0],
    cents = (number.split('.')[1] || '') +'00';
    dollars = dollars.split('').reverse().join('')
        .replace(/(\d{3}(?!$))/g, '$1,')
        .split('').reverse().join('');
    return '$' + dollars + '.' + cents.slice(0, 2);
} */

module.exports = jabbaTheHut;
