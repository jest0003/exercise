let premiumRabat = 0.2;
function udregnPris (pris, erPremiumMedlem) {
    if (erPremiumMedlem) {
        return pris - pris * erPremiumRabat;
    }
    return pris;
}
udregnPris();
let endeligPris =udregnPris(1000, true);
console.log(endeligPris);

