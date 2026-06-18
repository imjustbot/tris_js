const caselle = document.querySelectorAll('.casella');
caselle.forEach(casella => {
    casella.addEventListener('click', () => {
        if (casella.textContent === ''){
            casella.textContent = 'x';

            mossaBot();
        }
    });
});

function mossaBot() {
    const caselleVuote = Array.from(caselle).filter(c => c.textContent === '');
    if (caselleVuote.length > 0) {

        const mossa = caselleVuote[0];
        mossa.textContent = 'O';

    }

}
