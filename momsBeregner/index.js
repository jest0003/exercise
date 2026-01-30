"use strict";
function beregnMoms(beloeb) {
  const moms = beloeb * 0.25;
  const total = beloeb + moms;

  console.log("Beløb uden moms:", beloeb);
  console.log("Moms (25%):", moms);
  console.log("Beløb med moms:", total);
  return total;
}

console.log(beregnMoms(300));