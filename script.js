let genBtn = document.getElementById("button3"); 
element2.addEventListener("click", () => {
    let cat_result = document.getElementById("cat");
    fetch('https://aws.random.cat/meow')
    .then(res => res.json())
    .then(data => {
        cat_result.setAttribute('src', data.file);
    }
)});