document.addEventListener("DOMContentLoaded", function() {
    const menuItems = [
        { name: "INICIO", url: "index.html" },
        { name: "ACERCA DE NOSOTROS", url: "SobreNosotros.html" },
        { name: "ADMISIÓN", url: "ExamenAdmision.html" },
        { name: "CARRERAS", url: "Carreras.html" },
        { name: "BECAS", url: "Becas.html"}
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
