document.addEventListener("DOMContentLoaded", function() {
    const menuItems = [
        { name: "Inicio", url: "index.html" },
        { name: "Acerca de", url: "SobreNosotros.html" },
        { name: "Examen de Admision", url: "ExamenAdmision.html" },
        { name: "Carreras", url: "Carreras.html" },
        { name: "Becas", url: "Becas.html"}
    ];

    const menuList = document.getElementById("menu-list");

    menuItems.forEach(item => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = item.url;
        a.textContent = item.name;
        li.appendChild(a);
        menuList.appendChild(li);
    });
});
