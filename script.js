/*Založte si nový JavaScriptový program a na jeho začátek vložte následující seznam čísel. Budeme jej používat ve všech následujících úlohách.

const numbers = [
  -24, -11, 27, 29, -4, -28, -21, -14, 3, -8, 24, 19, -25, -2, -1, 11, 32, -31, 5
];
Vypište do stránky všechna čísla.
Vypište do stránky druhé mocniny všech čísel.
Vypište do stránky pouze záporná čísla.
Vypište do stránky absolutní hodnotu všech čísel.
Vypište do stránky pouze sudá čísla.
Vypište do stránky pouze ta čísla, jejíchž absolutní hodnota je dělitelná třemi.
Vypište do stránky jak daleko je každé číslo v seznamu od čísla 5.
Vypište do stránky druhé mocnicny vzdáleností všech čísel od čísla 5.
Spočítejte, kolik je v seznamu záporných čísel.
Spočítejte součet všech čísel v poli.
Spočítejte průměr všech čísel v poli.
Spočítejte součet všech kladných čísel v poli.*/

const numbers = [
    -24, -11, 27, 29, -4, -28, -21, -14, 3, -8, 24, 19, -25, -2, -1, 11, 32, -31, 5
  ];

  numbers.forEach((cisla) => {                  // vypište do stránky všechna čísla
    document.body.innerHTML += ` ${cisla}, `
})
document.body.innerHTML += ` <br>`

numbers.forEach((druhaMocnina) => {                  // Vypište do stránky druhé mocniny všech čísel.
    document.body.innerHTML += ` ${druhaMocnina * druhaMocnina},  `
})
document.body.innerHTML += ` <br>`

numbers.forEach((zapornaCisla) => {                  // Vypište do stránky pouze záporná čísla.
    if (zapornaCisla < 0) {  
        document.body.innerHTML += `${zapornaCisla}, `;  
    }
});
document.body.innerHTML += ` <br>`

numbers.forEach((absolutniH) => {                      // Vypište do stránky absolutní hodnotu všech čísel.   
    const absolutniHodnota = Math.abs(absolutniH);  
    document.body.innerHTML += `${absolutniHodnota}, `;  
});
document.body.innerHTML += ` <br>`

numbers.forEach((sudaCisla) => {                      // Vypište do stránky pouze sudá čísla.
    if (sudaCisla % 2 === 0) {  
        document.body.innerHTML += `${sudaCisla}, `;  
    }
});
document.body.innerHTML += ` <br>`

numbers.forEach((absolutniHodnotaDeleno3) => {                    //Vypište do stránky pouze ta čísla, jejíchž absolutní hodnota je dělitelná třemi.
    const absolutniHodnota = Math.abs(absolutniHodnotaDeleno3); 
    if (absolutniHodnota % 3 === 0) {  
        document.body.innerHTML += `${absolutniHodnotaDeleno3}, `;  
    }
});
document.body.innerHTML += ` <br>`

numbers.forEach((cislo) => {                        // Vypište do stránky jak daleko je každé číslo v seznamu od čísla 5.
    const vzdalenost = Math.abs(cislo - 5);
    document.body.innerHTML += `${vzdalenost}, `; 
});
document.body.innerHTML += ` <br>`

numbers.forEach((cislo) => {                        // Vypište do stránky druhé mocnicny vzdáleností všech čísel od čísla 5.
    const vzdalenost = Math.abs(cislo - 5);
    document.body.innerHTML += `${vzdalenost * vzdalenost}, `; 
});
document.body.innerHTML += ` <br>`


let pocetZapornych = 0;                              //Spočítejte, kolik je v seznamu záporných čísel.

numbers.forEach((cislo) => {
    if (cislo < 0) {
        pocetZapornych += 1;
    }
});
document.body.innerHTML += `Počet záporných čísel v seznamu je: ${pocetZapornych}`;

document.body.innerHTML += ` <br>`;


let sum = 0;                             //Spočítejte součet všech čísel v poli.

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
document.body.innerHTML += `Součet všech čísel v poli je: ${sum}`;

document.body.innerHTML += ` <br>`;


let sum2 = 0;
for (let i = 0; i < numbers.length; i += 1) {
  sum2 += numbers[i];
}

const averageMark = sum2 / numbers.length;
document.body.innerHTML += `Průměr čísel v seznamu je: ${averageMark}`; // Vypíše průměr čísel v poli.

document.body.innerHTML += ` <br>`;


let sum3 = 0;                             //Spočítejte součet všech kladných čísel v poli.

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
  sum3 += numbers[i];
}
}
document.body.innerHTML += `Součet všech kladných čísel v poli je: ${sum3}`;



