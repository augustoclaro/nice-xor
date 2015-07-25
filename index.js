var bin = require('./modules/binary.js');
var hex = require('./modules/hex.js');

hex.bin = bin;
bin.hex = hex;

var doXor = function(binStr, binKey){
  var keyIndex = 0;
  return binStr.split('').map(function(item){
    if (keyIndex >= binKey.length) keyIndex = 0;
    return parseInt(item,10) ^ parseInt(binKey[keyIndex++], 10);
  }).join('');
};

var xor = {
  crypt: function(str, key){
    return bin.toHex(doXor(bin.toBin(str), bin.toBin(key)));
  },
  decrypt: function(str, key){
    return bin.toStr(doXor(hex.toBin(str), bin.toBin(key)));
  }
};

module.exports = xor;