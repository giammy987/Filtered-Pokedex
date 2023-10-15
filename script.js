


let pokemon;

fetch("pokemon.json-master/pokedex.json")
.then(Response => {
    return Response.json()
})
.then(data => {

    pokemon = data.slice(0,151);
    //console.log(pokemon);
    generateCard(pokemon);
})
.catch(err => {});


function generateCard(listPok){

    const pokedex = document.getElementById("pokedex");
    //pokedex.innerHTML = ""
    while (pokedex.firstChild) {
        pokedex.removeChild(pokedex.firstChild)
    }
    listPok.forEach(element => {
        const card = `<div class="iniline-block rounded-xl m-auto max-w-[200px] p-5 hover:bg-slate-200">
        <img src="pokemon.json-master/images/${formatIdImg(element.id)}.png">
        <h3>${element.name.english}</h3>
        </div>`
        pokedex.insertAdjacentHTML("beforeend",card);
    });

};

function formatIdImg(id){
    let numChar = id.toString().length;
    if (numChar == 1) {
        id = `00${id}`;
        return id;
    } else if (numChar == 2){
        id = `0${id}`;
        return id;
    } else {
        return id;
    }

}

let searchBar = document.getElementById("searchBar");
searchBar.addEventListener("keyup", (event)=>{
    let  input = event.target.value;
    let pokemonFilter = [];

    if (input.startsWith("type:")) {

        let app = input.replace("type:","")
        pokemonFilter = pokemon.filter(element => {
            return element.type.indexOf(app) !=-1
        })

    } else {

        pokemonFilter = pokemon.filter(element => {
            return element.name.english.startsWith(input)
        })

    }

    generateCard(pokemonFilter)
    
})
        
    
    
