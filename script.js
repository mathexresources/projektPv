const btn = document.getElementById('btn');
const catImage = document.getElementById('cat');

btn.addEventListener('click', () => {
    fetch('https://api.thecatapi.com/v1/images/search')
        .then(response => response.json())
        .then(data => {
            const catImageURL = data[0].url;
            catImage.src = catImageURL;
        })
        .catch(error => {
            console.error('Error:', error);
        });
});
