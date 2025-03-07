let listaNombres = [];

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
};

function agregar(){
    let nombreUsuario = document.getElementById('nombreDigitado').value; 
    if(nombreUsuario === ''){
        alert("Por favor ingrese un nombre valido")
    }else {
        listaNombres.push(nombreUsuario);
        limpiar();
        asignarTextoElemento('p', `${listaNombres}`);;
    }
    console.log(listaNombres);   
    return;
}

function sortear(){
    if (listaNombres.length === 0){
        alert("Por favor ingrese los nombres a la lista")
    } else {
        let amigoSecreto = listaNombres[Math.floor(Math.random() * listaNombres.length)]; 
        cambiarEstilos();
        asignarTextoElemento('p', `El amigo sorteado es: ${amigoSecreto}`);
        document.getElementById('nuevoJuego').removeAttribute('disabled');
    }
    return;
}

function cambiarEstilos(){
    document.querySelector('p').style.color = "#04856B";
    document.querySelector('p').style.fontSize = "20px";
}

function limpiar() {        
    return document.querySelector('input').value = '';
}

function nuevoJuego() {      
    listaNombres = [];
    asignarTextoElemento('p', '');
    document.querySelector('#nuevoJuego').setAttribute('disabled', 'true');
    document.querySelector('p').style.color = "#5e5c5d";
    document.querySelector('p').style.fontSize = "1rem";
    return;
    
}


