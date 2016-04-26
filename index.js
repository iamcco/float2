
function Float2() {
    this.zeroRightReg = /((\.)(\d*))?$/;
    this.zeroLeftReg = /^(-)?(\d*\.?)?/;
    this.replaceRight = '(\\.)(\\d{s,s})';
    this.replaceLeft = '(\\d{s,s})(\\.|$)';
}

Float2.prototype.dot2right = function(flo, len) {
    len = typeof len !== 'number' ? 0 : len;
    var replaceReg = new RegExp(this.replaceRight.split('s').join(len));

    flo = flo.toString().replace(this.zeroRightReg, '.$3' + this.zeroLen(len));

    return parseFloat(flo.replace(replaceReg, '$2$1'));
};

Float2.prototype.dot2left = function(flo, len) {
    len = typeof len !== 'number' ? 0 : len;
    var replaceReg = new RegExp(this.replaceLeft.split('s').join(len));

    flo = flo.toString().replace(this.zeroLeftReg, '$1' + this.zeroLen(len) + '$2');

    return parseFloat(flo.replace(replaceReg, '.$1'));
};

Float2.prototype.dot2 = function(flo, len) {
    if(len > 0) {
        flo = this.dot2right(flo, Math.abs(len));
    } else {
        flo = this.dot2left(flo, Math.abs(len));
    }

    return flo;
};

Float2.prototype.zeroLen = function(len) {
    return Array(len + 1).join(0);
};

module.exports = new Float2();

