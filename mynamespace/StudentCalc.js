var StudengCalc;
(function (StudengCalc) {
    function AnnualFeeCalc(feeamount, term) {
        return feeamount * term;
    }
    StudengCalc.AnnualFeeCalc = AnnualFeeCalc;
})(StudengCalc || (StudengCalc = {}));
