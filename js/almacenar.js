



const ITEM = document.getElementById ("item") ;

const BOTON_AGREGAR = document.getElementById ("agregar") ;

const CONTENEDOR = document.getElementById ("contenedor") ;

const BOTON_LIMPIAR = document.getElementById ("limpiar") ;


let listaDeItems = [] ;

BOTON_AGREGAR.onclick = () => {
 if (ITEM.value == "") {
    return;
  }
  agregarItem(ITEM.value);
  ITEM.value = "";
};

BOTON_LIMPIAR.onclick = () => {
   localStorage.clear ();
   location.reload ();

};

const agregarListaALocal = () => {

    localStorage.setItem ("listaDeItems", 
    JSON.stringify (listaDeItems));
   
    mostrarItems () ;
};

const traerListaLocal = () => {

    let res = JSON.parse(localStorage.getItem("listaDeItems"));

    return res;
};

const agregarItem = (item) => {
     if (traerListaLocal() != null) {
  
     listaDeItems = traerListaLocal();
  
     }
  
    listaDeItems.push(item);
  
    agregarListaALocal();
  };

  const mostrarItems = () => {
    CONTENEDOR.innerHTML = "";
  
    traerListaLocal().forEach((element) => {
  
      CONTENEDOR.innerHTML += `<li class="list-group-item list-group-item-action
    
    ">${element} </li>` ;
    });
  };

mostrarItems () ;

