const reseaux = [
    { icon: "mail", name: "Email", link: "mailto:wangceline0@gmail.com" },
    { name: "LinkedIn", link: "https://www.linkedin.com/in/c%C3%A9line-wang-4aa089257/" }
]
const anniv = new Date("11/07/2001");
const age = Math.floor((new Date(Date.now() - anniv.getTime()) - 1970) / 31536000000);

window.addEventListener("DOMContentLoaded", () => {
    generateMenu();
    generateSocials();
    document.querySelectorAll(".age").forEach(element => element.innerText = age);
});

function generateSocials() {
    const socials = document.querySelector(".socials");
    reseaux.forEach(reseau => {
        const social = document.createElement("a");
        social.classList.add("button");
        social.href = reseau.link;
        if(reseau.link.startsWith('http')) social.target = "_blank";
        if(reseau.link.startsWith('http')) social.rel = "noopener";
        if (reseau.icon) {
            const icon = document.createElement("span");
            icon.classList.add("material-symbols-outlined");
            icon.innerText = reseau.icon;
            social.appendChild(icon);
        }
        social.innerHTML += ' ' + reseau.name;
        socials.appendChild(social);
    });
}

function generateMenu() {
    const sections = document.querySelectorAll("main section");
    sections.forEach(section => {
        console.log(section.id);
        if (section.id) {
            const menuItem = document.createElement("li");
            const menuItemLink = document.createElement("a");
            menuItemLink.href = `#${section.id}`;
            menuItemLink.textContent = section.querySelector(".title").innerText;
            menuItem.appendChild(menuItemLink);
            document.querySelector("header ul").appendChild(menuItem);
        }
    });
}