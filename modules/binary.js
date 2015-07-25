module.exports = {
    hex: {},
    toStr: function (str) {
        if (str.match(/[10]{8}/g)) {
            var wordFromBinary = str.match(/([10]{8}|\s+)/g).map(function(fromBinary) {
                return String.fromCharCode(parseInt(fromBinary, 2));
            }).join('');
            return wordFromBinary;
        }
    },
    toBin: function (str) {
        var st, i, j, d;
        var arr = [];
        var len = str.length;
        for (i = 1; i <= len; i++) {
            //reverse so its like a stack
            d = str.charCodeAt(len - i);
            for (j = 0; j < 8; j++) {
                arr.push(d % 2);
                d = Math.floor(d / 2);
            }
        }
        //reverse all bits again.
        return arr.reverse().join("");
    },
    toHex: function(str){
        return this.hex.toHex(this.toStr(str));
    }
};