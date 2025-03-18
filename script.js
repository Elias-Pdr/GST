
function clickSearch(){
    console.log("opa");
    titleH1 = document.querySelector(".titleH1")
    searchInput = document.querySelector("#searchInput")
    
    if (titleH1.style.display != "none") {
        titleH1.style.display = "none"
        searchInput.style.display = "block"
    }else{
        titleH1.style.display = "block"
        searchInput.style.display = "none"

    }
}

let prevScrollpos = window.pageYOffset; // Posição do scroll anterior
let header = document.getElementById("header");

window.onscroll = function() {
    let currentScrollPos = window.pageYOffset; // Posição atual do scroll

    if (currentScrollPos > 0) {
        // Se o usuário rolou para baixo, mostramos o header
        header.style.top = "0";
    } else {
        // Se o usuário está no topo, escondemos o header
        header.style.top = "-54px"; // Ajuste conforme a altura do seu header
    }

    prevScrollpos = currentScrollPos; // Atualiza a posição anterior do scroll
};
