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
    
}
