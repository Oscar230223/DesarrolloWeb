let data = [
    { name: "Inicio", url: "/index.html" },
    { name: "Becas", url: "/Becas.html" },
    { name: "Carreras", url: "/Carreras.html" },
    { name: "Examen de Admision", url: "/ExamenAdmision.html" },
    { name: "Sobre Nosotros", url: "/SobreNosotros.html" }
];

function buscar() {
    let query = document.getElementById("buscar").value;

    if (query.trim() === "") {
        document.getElementById("results").style.display = "none";
        return;
    }

    let results = data.filter(item => item.name.toLowerCase().includes(query.toLowerCase()));

    let resultsElement = document.getElementById("results");
    resultsElement.innerHTML = "";

    if (results.length > 0) {
        results.forEach(result => {
            let li = document.createElement("li");
            li.textContent = result.name;
            li.addEventListener("click", () => {
                window.location.href = result.url;
            });
            resultsElement.appendChild(li);
        });
    } else {
        let li = document.createElement("li");
        li.textContent = "No se encontraron elementos para: " + query;
        resultsElement.appendChild(li);
    }

    resultsElement.style.display = "block";
}

document.getElementById("buscar").addEventListener("input", buscar);

document.addEventListener("click", function(event) {
    if (!document.querySelector('.buscar-wrapper').contains(event.target)) {
        document.getElementById("results").style.display = "none";
    }
});
