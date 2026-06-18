const caselle = document.querySelectorAll('.casella');

const combinazioniVincenti = [,
 ,
 ,
 ,
 ,
 ,
 ,
    [2, 4, 6]
];

caselle.forEach(casella => {
    casella.addEventListener('click', () => {
        if (casella.textContent === '') {
            casella.textContent = 'X';
            if (!controllaVittoria('X')) {
                mossaBot();
            }
        }
    });
});

function mossaBot() {
    const caselleVuote = Array.from(caselle).filter(c => c.textContent === '');

    if (caselleVuote.length > 0) {
        const indiceCasuale = Math.floor(Math.random() * caselleVuote.length);
        const mossa = caselleVuote[indiceCasuale];
        mossa.textContent = 'O';
        controllaVittoria('O');
    }
}

function controllaVittoria(simbolo) {
    const haVinto = combinazioniVincenti.some(combinazione => {
        return combinazione.every(indice => caselle[indice].textContent === simbolo);
    });

    if (haVinto) {
        setTimeout(() => {
            alert("Ha vinto: " + simbolo);
            resetGioco();
        }, 100);
        return true;
    }
    return false;
}

function resetGioco() {
    caselle.forEach(casella => casella.textContent = '');
}

