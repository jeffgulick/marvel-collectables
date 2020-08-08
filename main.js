
let arrayOfCards = [];

let arrayHardCodedCards = [
  {
    'name': "Spider-Girl (May Parker)", 'thumbnail': {
      "path": "http://i.annihil.us/u/prod/marvel/i/mg/1/70/4c003adccbe4f",
      "extension": "jpg"
    }
  }, {
    'name': "Hulk", "thumbnail": {
      "path": "http://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0",
      "extension": "jpg"
    }
  }, {
    name: "Captain America", thumbnail: {
      path: "http://i.annihil.us/u/prod/marvel/i/mg/3/50/537ba56d31087",
      extension: "jpg"
    }
  }, {
    name: "Iron Man", thumbnail: {
      path: "http://i.annihil.us/u/prod/marvel/i/mg/9/c0/527bb7b37ff55",
      extension: "jpg"
    }
  }, {
    name: "Wolverine", thumbnail: {
      path: "http://i.annihil.us/u/prod/marvel/i/mg/2/60/537bcaef0f6cf",
      extension: "jpg"
    }
  }, {
    name: "Deadpool", thumbnail: {
      path: "http://i.annihil.us/u/prod/marvel/i/mg/9/90/5261a86cacb99",
      extension: "jpg"
    }
  },
  {
    name: "Doctor Strange", thumbnail: {
      path: "http://i.annihil.us/u/prod/marvel/i/mg/5/f0/5261a85a501fe",
      extension: "jpg"
    }
  },
  {
    name: "Magneto", thumbnail: {
      path: "http://i.annihil.us/u/prod/marvel/i/mg/3/b0/5261a7e53f827",
      extension: "jpg"
    }
  },
  {
    name: "Jean Grey", thumbnail: {
      path: "http://i.annihil.us/u/prod/marvel/i/mg/f/d0/528d3412090b4",
      extension: "jpg"
    }
  }
]


window.onload = function () {
  showExistingCards();

}

const getCards = (searchText, numberSearch) => {

  console.log(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${searchText}&limit=${numberSearch}&ts=1&apikey=e1cffbc5d074cc3af16053983ad97635&hash=f4bdcf4b9587350e3453a3d3f6529473`)
  fetch(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${searchText}&limit=${numberSearch}&ts=1&apikey=e1cffbc5d074cc3af16053983ad97635&hash=f4bdcf4b9587350e3453a3d3f6529473`)
    .then(res => res.json())
    .then(data => {
      arrayOfCards = data.data.results;

      arrayOfCards.map(card => {
        let catalog = document.getElementById('displayNew');
        let li = document.createElement('li');
        let name = document.createTextNode(`Name: ${card.name}`)
        li.appendChild(name);
        const button = document.createElement("button")
        li.appendChild(button)
        button.innerHTML = "Click to Add"
        button.addEventListener('click', function () { 
          addCard(card);
          li.remove(); 
          picture.remove();
        })


        let picture = document.createElement('div');
        picture.classList.add('pics');
        let image = document.createElement('img');
        image.setAttribute('src', `${card.thumbnail.path}.jpg`);
        picture.appendChild(image);
        catalog.appendChild(picture);

        catalog.appendChild(li);
      })
    })
}

const showExistingCards = () => {

  arrayHardCodedCards.map(card => {
    let catalog = document.getElementById('catalog');

    let li = document.createElement('li');
    let name = document.createTextNode(`Name: ${card.name}`)
    li.appendChild(name);

    let picture = document.createElement('div');
    picture.classList.add('pics');
    let image = document.createElement('img');
    image.setAttribute('src', `${card.thumbnail.path}.jpg`);
    picture.appendChild(image);
    catalog.appendChild(picture);

    catalog.appendChild(li);
  })


}

const submitOptions = () => {
  let searchText;
  let numberSearch = 10;
  clearList('displayNew');  // clears the area if an old search was there

  let formInfo = document.getElementById("form");
  searchText = formInfo.elements[0].value;
  numberSearch = formInfo.elements[1].value;

  console.log(searchText + numberSearch)

  getCards(searchText, numberSearch);

}

const addCard = (card) => {
  console.log(card.id)

  arrayHardCodedCards.push(card); //add card click to catalog
  clearList('catalog');            //clear area so we can reuse existing function to reprint
  showExistingCards();             //reprint with new card added


}
//this function will clear the area passed to it so it can be redisplayed with fresh start
const clearList = (id) => {
  let parent = document.getElementById(id);
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}