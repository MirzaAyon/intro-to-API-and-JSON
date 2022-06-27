function loadAlbums() {
    fetch('https://jsonplaceholder.typicode.com/albums')
        .then(res => res.json())
        .then(data => displayAlbums(data));
}
loadAlbums(); //eta call na korle hbe na 
function displayAlbums(Albums) {
    console.log(Albums);
    const albumContainer = document.getElementById('albums');
    for (const album of Albums) {
        const p = document.createElement('p');
        p.style.textAlign = 'center';
        p.innerText = album.title;
        albumContainer.appendChild(p);
    }
}
//kaj shesh e load albums func ke call kore dibo