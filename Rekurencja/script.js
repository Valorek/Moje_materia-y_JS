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
tab2={}
rekurencja(tablica);

function rekurencja(tab) {
    if (tab === undefined) {
        return;
    } else {
        i++
        tab2[i]={key:'a'+1,value:tab[i]}
        rekurencja(tab[i]);
    }
}
console.log(tab2)

//   console.table(tablica)
