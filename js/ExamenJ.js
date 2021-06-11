"use strict";
BigNumber.config({DECIMAL_PLACES: 2, ROUNDING_MODE: BigNumber.ROUND_HALF_UP});
var FMT_NUMERO = "$0,0.00";
var forma = document.getElementById("forma"),
    salidaMenu = document.getElementById("salidaMenu"),
    salidaPrecio = document.getElementById("salidaPrecio"),
    menu = document.getElementsByName("menu"),
    entradas = ["clave", "nombre", "telefono", "fecha"],
    salidas = ["salidaClave", "salidaNombre", "salidaTelefono", "salidaFecha"],
    txtFecha = forma["fecha"],
    salidaFecha = document.getElementById("salidaFecha"),miFecha;
forma.addEventListener("submit", EnPantalla, false),
forma.addEventListener("submit", EnAlerta, false),
forma.addEventListener("click", validaMenu, false);
validaMenu();
function EnPantalla()
{
  var clave = forma["clave"].value;
  var salida = forma["salidaClave"];
  var ini = clave;salida.value = "La clave es: " + ini + ". ";
  var nombre = forma["nombre"].value;
  var salida = forma["salidaNombre"];
  var inic = nombre;salida.value = "El nombre es: " + inic + ". ";
  var telefono = forma["telefono"].value;
var salida = forma["salidaTelefono"];
  var inici = telefono;salida.value = "El telefono es: " + inici + ". ";
  var fecha = new Date (txtFecha.value);
  miFecha = (fecha.getDate()+1) + "/" + (fecha.getMonth()+1) + "/" + fecha.getFullYear();
  salidaFecha.textContent = "La fecha es: " + miFecha + ".";
}
function EnAlerta(){
  var forma = document.getElementById("forma"), 
      entradas = ["clave", "nombre", "telefono", "fecha"],
      salidas = ["salidaClave", "salidaNombre", "salidaTelefono", "salidaFecha"];
  var clave = forma["clave"].value;
  var salida = forma["salidaClave"];
  var ini = clave;
  var nombre = forma["nombre"].value;
  var salida = forma["salidaNombre"];
  var inic = nombre;
  var telefono = forma["telefono"].value;
  var salida = forma["salidaTelefono"];
  var inici = telefono;
var fecha = new Date (txtFecha.value);
  miFecha = (fecha.getDate()+1) + "/" + (fecha.getMonth()+1) + "/" + fecha.getFullYear();
  alert("La clave es: " + ini + ". " + "El nombre es: " + inic + ". " + "El telefono es: " + inici + ". " + "La fecha es: " + miFecha + ". ");
}
function validaMenu(){
  var  menuSeleccionados = new Array();
  for (var i = 0, total = menu.length; i < total; i++){
    var menus = menu[i];
    if(menus.checked){
      menuSeleccionados.push(menus.value);
    }
  }
  salidaMenu.textContent = menuSeleccionados.join(", ") + ".";
}
