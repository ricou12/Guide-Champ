const test = fetch('http://127.0.0.1:4000/Guide-Champ/_data/mushroom.json')
    .then(response => {
        response.json()
            .then(console.log);
    });