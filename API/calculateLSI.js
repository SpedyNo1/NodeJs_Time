async function calculateLSIAsync(pH, tds, temp, calcium, alcalinity) {
    const A = (Math.log10(tds) - 1) / 10;
    const B = -13.12 * Math.log10(temp + 273) + 34.55;
    const C = Math.log10(calcium) - 0.4;
    const D = Math.log10(alcalinity);
    const pHs = 9.3 + A + B - (C + D);
    let LSI = pH - pHs;
    let indication;
    if (-2.0 < LSI && LSI <= -0.5) {
      indication = "Serious corrosion";
    } else if (-0.5 < LSI && LSI < 0) {
      indication = "Slightly corrosion but non-scale forming";
    } else if (LSI === 0) {
      indication = "Balanced but pitting corrosion possible";
    } else if (0.0 < LSI && LSI < 0.5) {
      indication = "Slightly scale forming and corrosive";
    } else if (0.5 < LSI && LSI < 2.0) {
      indication = "Scale forming but non-corrosive";
    } else {
      indication = "Invalid calculated value";
    }
    return { LSI, indication }
  }
  module.exports = calculateLSIAsync;
  