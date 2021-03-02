

let images = [
{
    filename: "gallery-1.jpg",
    label: "gallery 1"
},{
    filename: "gallery-2.jpg",
    label: "gallery 2"
},{
    filename: "gallery-3.jpg",
    label: "gallery 3"
},{
    filename: "gallery-4.jpg",
    label: "gallery 4"
},{
    filename: "gallery-5.jpg",
    label: "gallery 5"
},{
    filename: "gallery-6.jpg",
    label: "gallery 6"
},{
    filename: "gallery-7.jpg",
    label: "gallery 7"
},{
    filename: "gallery-8.jpg",
    label: "gallery 8"
},{
    filename: "gallery-9.jpg",
    label: "gallery 9"
},{
    filename: "gallery-10.jpg",
    label: "gallery 10"
},{
    filename: "gallery-11.jpg",
    label: "gallery 11"
},{
    filename: "gallery-12.jpg",
    label: "gallery 12"
},{
    filename: "gallery-13.jpg",
    label: "gallery 13"
},{
    filename: "gallery-14.jpg",
    label: "gallery 14"
},{
    filename: "gallery-15.jpg",
    label: "gallery 15"
},{
    filename: "gallery-16.jpg",
    label: "gallery 16"
}
]

function galleryRender () {
    console.log("running galleryRender function.");

    div = $('<div></div>');

    $('#carousel').append(div);

    for (var i = 0; i < images.length; i++) {
        $('#carousel').append(`<div class="carousel-item">
            <img class="responsive-img galleryImg" src="./images/Gallery/{images[i].filename} alt={images[i].label} />
            </div>
        `);
    }

}

function vintalight () {
    const activeVintalight = container => {
        // Delegación de eventos para detectar click en los hijos
        container.addEventListener("click", e => {
            let element = e.target;
            // Validar que se haya dado click en el pseudoelemento before
            if (element.tagName == "DIV") {
                // Obtener dirección y descripción de la imagen que se dio click
                let src = element.querySelector("img").src,
                    descrip = element.querySelector("img").alt,
                    // Crear un nuevo div que se usará como overlay
                    vintalightOverlay = document.createElement("div");
                    // Agregar clase al div que creamos para poder darle estilos con CSS
                    vintalightOverlay.classList.add("vintalight-overlay");
                    // Agregar contenido al overlay 
                vintalightOverlay.innerHTML = `
                    <figure class="vintalight__container active">
                        <div class="vintalight__photo">
                            <img src="${src}" alt="${descrip}" class="vintalight__img"/>
                        </div>
                        <figcaption class="vintalight__caption">
                            <h3 class="vintalight__text">${descrip}</h3>
                        </figcaption>
                        <button class="vintalight__button" id="button-close">✕</button>
                    </figure>
                `;
                // Meter el overlay en el DOM
                document.body.appendChild(vintalightOverlay);
                // Añadimos la clase active para poder darle transición
                setTimeout(() => {
                    vintalightOverlay.classList.add("active");
                }, 1);
                // Eliminar el scroll del body
                document.body.style.overflow = "hidden";
                // Evento para cerrar el overlay
                document.getElementById("button-close").addEventListener("click", () => {
                    // Eliminar clase active
                    vintalightOverlay.classList.remove("active");
                    // Eliminar overlay del DOM
                    setTimeout(() => {
                        document.body.removeChild(vintalightOverlay);
                    }, 500);
                    // Devolver scroll al body
                    document.body.style.overflow = "auto";
                });
                // Evento para cerrar el overlay con la tecla ESC
                window.addEventListener("keyup", e => {
                    if (e.key === "Escape") document.getElementById("button-close").click();
                });
            }
        });
    }
    
    // Activamos la función
    window.addEventListener("load", activeVintalight(document.getElementById("vintalight")));
}

vintalight();