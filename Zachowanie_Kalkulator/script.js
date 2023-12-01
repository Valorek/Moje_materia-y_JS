url = "https://imiki.pl/dane.json";
url1 = "https://imiki.pl/dane1.json";

function Popieranie_danych(url, formId) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            dane(data, formId);
        })
        .catch(error => {
            console.error('Błąd JSON:', error);
        });
}

Popieranie_danych(url, "a0");
Popieranie_danych(url1, "b0");

function dane(d, formId) {
    const selectElement = document.getElementById(formId);

    Object.keys(d).forEach(key => {
        const value = d[key];

        let z;
        if (typeof value.punkty === "object") {
            z = `${value.punkty.p0}-${value.punkty.p1}`;
        } else {
            z = value.punkty;
        }

        //nowy element option
        const option = document.createElement("option");

        //atrybuty dla elementu option
        option.value = `p${key}`;
        option.textContent = `${value.pozycja} [${z}]`;

        //obsługa zdarzenia do elementu option
        option.addEventListener("onclick", () => wywolaj(value));

        // Dodanie elementu option do formularza
        selectElement.appendChild(option);
    });
}

function wywolaj(value) {
    const wypluwacz = document.getElementById("wypluwacz");
    if (typeof value.punkty === "object") {
        wypluwacz.textContent = `${value.punkty.p0}-${value.punkty.p1}`;
    } else {
        wypluwacz.textContent = value.punkty;
    }
}

//Nie mam pojęcia dlaczego wartości dodanie są undefined :( 
