/*SNACK 1 -3
A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l'iniziale maiuscola.
Es: ['pippo', 'PLUTO', 'Paperino'] => ['Pippo', 'Pluto', 'Paperino']*/


/*const disneyStars = ['pippo', 'PLUTO', 'Paperino'];

const newDisney = disneyStars.map((element) => {
    return `${element[0].toUpperCase()}${element.slice(1).toLowerCase()}`
});
console.log(newDisney);*/










/*SNACK 2
Un oggetto rappresenta una finestra di un browser e contiene due campi: 
un array di tab aperte
un numero che indica l'indice della tab aperta nell'array:
{
    "tab": ["Facebook", "GitHub", "Gmail"],
    "activeTab": 0
}
Il software deve guardare se c'è un social aperto ed eliminarlo dalle tab.
Nel caso la tab fosse attiva, deve attivare la successiva.*/

/*const browser = {
        tab: ['Facebook', 'GitHub', 'Gmail'],
        activeTab: 0,
    };

    // incremento activeTab, elimino social active 
    browser.tab.splice(browser.activeTab,1)
    browser.activeTab ++;

    console.log(browser);*/










/*SNACK 4 
Partendo da un array di oggetti con i contatti di una rubrica con nome, cognome, numero, attivo (true,false)
Andiamo a stampare nome cognome e numero dentro una lista.
Fare in modo poi che i contatti non attivi (attivo: false) siano stampati di colore rosso
mentre gli altri normalmente di nero.
Cliccando sul numero della persona fate in modo che appaia in console
il cognome della persona di cui è stato cliccato il numero*/

const contacts = new Vue({
    el: "#app",
    data: {
        contacts: [
            {
                nome: "Claudia",
                cognome: "Azzurri",
                numero: 3497558702,
                active: true,
            },
            {
                nome: "Ernesto",
                cognome: "Neri",
                numero: 3476526410,
                active: false,
            },
            {
                nome: "Alessio",
                cognome: "Bianchi",
                numero: 3293339672,
                active: false,
            },
            {
                nome: "Francesca",
                cognome: "Rossi",
                numero: 3280221687,
                active: true,
            },
        ],
    },
    methods: {
        printLastname(element) {
            console.log(element.cognome);
        }
    },
});





