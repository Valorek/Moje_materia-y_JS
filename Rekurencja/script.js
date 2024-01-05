tablica=[
    [1,2,3,"kopytko"],
    [1,3,5,"pierogi"],
    [6,6,6,"racuchy"],

  ];
//   tablica[0].push({key:"aa",value:"1"})
//   tablica[1].push({key:"bb",value:"1"})
//   tablica[2].push({key:"cc",value:"1"})
let i = 0;
let tab;

rekurencja(tablica);

function rekurencja(tab) {
    i++;

    // Warunek zakończenia rekurencji
    if (tab === undefined || i >= tab.length) {
        return;
    } else {
        // Dostęp do elementu tablicy
        tab2 = tab[i];
        console.table(tab2);
        rekurencja(tab2);
    }
}
