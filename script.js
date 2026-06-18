const caselle = document.querySelectorAll('.casella');

const combinazioniVincenti = [
  [ 0, 1, 2 ],
  [ 3, 4, 5 ],
  [ 6, 7, 8 ],
  [ 0, 3, 6 ],
  [ 1, 4, 7 ],
  [ 2, 5, 8 ],
  [ 0, 4, 8 ],
  [ 2, 4, 6 ]
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
            alert("Ha vinto il giocatore " + simbolo);
            resetGioco();
        }, 100);
        return true;
    }
    return false;
}

function resetGioco() {
    caselle.forEach(casella => casella.textContent = '');
}

