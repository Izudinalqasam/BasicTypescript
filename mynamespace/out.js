var StudengCalc;
(function (StudengCalc) {
    function AnnualFeeCalc(feeamount, term) {
        return feeamount * term;
    }
    StudengCalc.AnnualFeeCalc = AnnualFeeCalc;
})(StudengCalc || (StudengCalc = {}));
/// <reference path="./StudentCalc.ts" />
var totalFee = StudengCalc.AnnualFeeCalc(4000, 4);
console.log(totalFee);
