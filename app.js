const counter = document.querySelector("h3")
let compteur = 0
const fabricationBulle = () => {
    const bubble = document.createElement("span");
    bubble.classList.add("bubble");
    document.body.appendChild(bubble);

    const size = Math.random() * 100 + 100;

    bubble.style.height = size + "px"
    bubble.style.width = size + "px"



    bubble.style.top = Math.random() * 100 + 50 + "%";
    bubble.style.left = Math.random() * 100 + "%";

    bubble.style.setProperty('--left', Math.random() * 100 + "%")
    bubble.addEventListener('click', () => {
        compteur++;
        counter.textContent = compteur
        bubble.remove()
    })
}

setInterval(fabricationBulle, 200)