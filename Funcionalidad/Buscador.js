access_keyparámetro: "7579004f054b67d27a7a6740764e356b81b95d6f3d6979dc05d23cfc70badfb9";
let data = [
    "Inicio",
    "Becas",
    "Carreras",
    "Examen de Admision",
    "Index",
    "Sobre Nosotros"
];

function buscar() {

    let query = document.getElementById("buscar").value;

    console.log(query);

    if(query.trim() === ""){
        return;
    }

    let results = [];

    for(let i = 0; i < data.length; i++){
        if(data[i].toLowerCase().includes(query.toLowerCase())){
            results.push(data[i]);
        }
    }

    document.getElementById("results").innerHTML = "";

    if(results.length > 0){
        for(let i = 0; i < results.length; i ++){
            let li = document.createElement("li");
            li.textContent = results[i];
            document.getElementById("results").appendChild(li);
        }
    }
    else{
        let li = document.createElement("li");
        li.textContent = "No se encontraron elementos para: " + query;
        document.getElementById("results").appendChild(li);
    }
}