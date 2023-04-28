var btnMenuDesplegable = document.getElementById("btnMenuDesplegable");
btnMenuDesplegable.addEventListener("click", () => {

    var contenedorMenu = document.getElementById("contenedorMenu");

    if (contenedorMenu.classList.contains("contenedorMenu")){
        contenedorMenu.classList.remove("contenedorMenu");
        contenedorMenu.classList.add("contenedorMenu2");
    }else{
        if (contenedorMenu.classList.contains("contenedorMenu2")){
            contenedorMenu.classList.remove("contenedorMenu2");
            contenedorMenu.classList.add("contenedorMenu");
        }
    }

    
})