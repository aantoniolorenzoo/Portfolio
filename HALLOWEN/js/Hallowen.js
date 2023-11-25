/*******************************************
 * 
 * 
 * 
 */

function show(element){
    document.getElementById(element).style.visibility="visible";
    /* extrae  con (get) un elemento (pinkfire) y cambia algo en su estilo (visibiliadad) de manera que pasa de estar oculto a visible*/
}
function hide(element){
    document.getElementById(element).style.visibility="hidden";
}

function sound(element){
    document.getElementById(element).play();
}

function pause(element) {
    document.getElementById(element).pause();
}