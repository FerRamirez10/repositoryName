/*

La api tiene un metodo random,
por lo que no es necesario el endpoint

function getIdDrink() {
    const elem = document.getElementById('idDrink');
    const idDrink = elem.value;
    return idDrink;
}

function getEndpointWithId() {
    const idDrink = this.getIdDrink();
    if (!idDrink) { // '', 0, null, undefined // valores truthy , falsy
        return '';
    }
    return `www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`;
}

*/

function Mostrar(cocktail) {
    const info = cocktail.drinks[0];
    document.getElementById('idCocktail').innerText = info.idDrink;
    console.log(info.idDrink);
    document.getElementById('nameCocktail').innerText = info.strDrink;
    console.log(info.strDrink);
    document.getElementById('catCocktail').innerText = info.strCategory;
    console.log(info.strCategory);

    

    
    let Ingredientes = [];
    for (let i = 1; i <= 15; i++) {
        const ingredient = info[`strIngredient${i}`];
        const measure = info[`strMeasure${i}`];
        if (ingredient && measure) {
            Ingredientes.push(`${measure} ${ingredient}`);
        }
    }

    let agregar = '<ul>';
    Ingredientes.forEach(ingredient => {
        agregar += `<li>${ingredient}</li>`;
        console.log(ingredient);
    });
    agregar += '</ul>';
    const typesContainer = document.getElementById('ingCocktail');
    typesContainer.innerHTML = agregar;

    document.getElementById('insCocktail').innerText = info.strInstructions;
    document.getElementById('display').src = info.strDrinkThumb;

    v = "favorita";

    localStorage.setItem(v , info.idDrink);
  
}

async function Buscar() {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/random.php`;
    try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json)
        Mostrar(json);
    } catch (error) {
        console.error(error);
        alert('Error'+error);
    }
}
function AbrirFavs() {
    var popup = document.getElementById("popup");
    popup.style.display = "block";

    const  V = localStorage.getItem(v);

  }
  
  function CerrarFavs() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
    localStorage.removeItem(v);
  }

 

