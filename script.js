fetch('https://api.thecatapi.com/v1/images/search')
    .then(response => response.json())
    .then(data => {
        const catImageURL = data[0].url;
        console.log(catImageURL);
        const btn = document.getElementById('btn');
        const catImage = document.getElementById('cat');

        btn.addEventListener('click', () => {
            catImage.src = catImageURL;
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });
