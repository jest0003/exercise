//1. Start evt. med at lave en simpel HTML-struktur. Du skal have et navigationselement (<nav>)
// til at vise dine brødkrummepunkter,samt en knap til at udløse genereringen af brødkrummestien.

//2. Lav en funktion, der returnerer navnet på hvert punkt i brødkrummenavigationen i et
// liste-element med et tilhørende link. Det sidste punkt skal kun være tekst uden et link.

//3. Interaktion med knappen: Tilføj en event listener til din knap, så når den klikkes, vil din
// breadcrumb-genererende funktion blive kaldt, og resultatet vil blive vist på dit website.

//4. Styling: Listeelementerne i brødkrummestien skal optræde på en række og være opdelt af en
// skråstreg (/) eller lignende symbol. Skråstregen skal ikke være en del af det klikbare link.

const bc = [{ name: "Hvidevarer", link: "/hvidevarer" },
    { name: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },
    { name: "Bosch", link: "/hvidevarer/vaskemaskiner/bosch/" },];

