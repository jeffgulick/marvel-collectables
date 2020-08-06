
let arrayOfCards = [];

window.onload = function(){
    getCards();
}

const getCards = () => {
    fetch('https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=e1cffbc5d074cc3af16053983ad97635&hash=f4bdcf4b9587350e3453a3d3f6529473')
      .then(res => res.json())
      .then(data => {
          arrayOfCards = data.data.results;

          arrayOfCards.map(card => {
            let catalog = document.getElementById('catalog');
            let li = document.createElement('li');
            let name = document.createTextNode(`Name: ${card.name}`)
            li.appendChild(name);
  
            let picture = document.createElement('div');
            picture.classList.add('pics');
            let image =document.createElement('img');
            image.setAttribute('src', `${card.thumbnail.path}.jpg`);
            picture.appendChild(image);
            catalog.appendChild(picture);
  
            catalog.appendChild(li);  
          })
      })
    }