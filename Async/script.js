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
        alert('Error' + error);
    }
}
function AbrirFavs() {
    var popup = document.getElementById("popup");
    popup.style.display = "block";
}

function CerrarFavs() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
}
document.getElementById('Favorito').addEventListener('click', function () {
    const idDrink = document.getElementById('idCocktail').innerText;
    const nameCocktail = document.getElementById('nameCocktail').innerText;

    // Crear un objeto con los datos del cóctel
    const cocktailData = {
        idDrink: idDrink,
        nameCocktail: nameCocktail,
    };

    // Obtener la lista de cócteles favoritos del localStorage o inicializarla si no existe
    let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

    // Agregar el cóctel actual a la lista de favoritos
    favoritos.push(cocktailData);

    // Guardar la lista de favoritos actualizada en localStorage
    localStorage.setItem('favoritos', JSON.stringify(favoritos));

    alert('Cóctel agregado a favoritos');
    MostrarFavoritos(); // Mostrar favoritos después de agregarlos
});

function MostrarFavoritos() {
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    const myList = document.getElementById('myList');

    // Limpiar la lista actual antes de agregar los elementos actualizados
    myList.innerHTML = '';

    // Recorrer la lista de favoritos y mostrar cada elemento
    favoritos.forEach(cocktailData => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<strong>ID:</strong> ${cocktailData.idDrink}, <strong>Nombre:</strong> ${cocktailData.nameCocktail}`;
        myList.appendChild(listItem);
    });
}

// Llamar a la función para mostrar los favoritos cuando se carga la página
window.addEventListener('load', MostrarFavoritos);
