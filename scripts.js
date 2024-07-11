document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const nim = document.getElementById('search-nim').value;
    const resultsSection = document.getElementById('results-section');

    // Clear previous results
    resultsSection.innerHTML = '';

    // Simulasi hasil pencarian berdasarkan NIM
    if (nim === '123456789') {
        resultsSection.innerHTML = `
            <p>Selamat! Anda diterima.</p>
            <p>Silakan daftar ulang sesuai petunjuk yang diberikan.</p>
        `;
    } else {
        resultsSection.innerHTML = '<p>Maaf, Anda tidak diterima.</p>';
    }
});
