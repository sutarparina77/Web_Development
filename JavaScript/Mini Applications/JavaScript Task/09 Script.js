function Calc_EMI()
{
    let P = Number(document.getElementById("Amount").value);
    let R = Number(document.getElementById("Rate").value);
    let T = Number(document.getElementById("Years").value);

    let SI = (P * R * T) / 100;

    let CompoundAmount = P * Math.pow((1 + R / 100), T);
    let CI = CompoundAmount - P;

    let n = T * 12;
    let r = R / (12 * 100);

    let EMI;

    if (r == 0)
    {
        EMI = P / n;
    }
    else
    {
        EMI = P * r * Math.pow(1 + r, n) /
              (Math.pow(1 + r, n) - 1);
    }

    document.getElementById("SI").value = "₹" + SI.toFixed(2);

    document.getElementById("CI").value = "₹" + CI.toFixed(2);

    document.getElementById("EMI").value = "₹" + EMI.toFixed(2);
}