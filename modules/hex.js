module.exports = {
    bin: {},
    toStr: function (str) {
        var bytes = [];
        for(var i=0; i< str.length-1; i+=2)
            bytes.push(parseInt(str.substr(i, 2), 16));
        return String.fromCharCode.apply(String, bytes);
    },
    toHex: function(str){
        var hex = '';
        for (var i = 0; i < str.length; ++i)
        {
            var chr = str.charCodeAt(i).toString(16);
            hex += chr.length < 2 ? '0' + chr : chr;
        }
        return hex;
    },
    toBin: function(str){
        return this.bin.toBin(this.toStr(str));
    }
};