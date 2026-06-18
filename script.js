const caselle = document.querySelectorAll('.casella');

caselle.forEach(casella => {
    casella.addEventListener('click', () => {
        if (casella.textContent === '') {
            casella.textContent = 'X';
            mossaBot();
        }
    });
});

function mossaBot() {
    const caselleVuote = Array.from(caselle).filter(c => c.textContent === '');

    if (caselleVuote.length > 0) {
        const indiceCasuale = Math.floor(Math.random() * caselleVuote.length);
        const mossa = caselleVuote[indiceCasuale];
        mossa.textContent = 'O';
    }
}

