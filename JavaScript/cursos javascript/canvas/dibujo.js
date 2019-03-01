var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");

boton.addEventListener("click", dibujoPorClick);

function dibujoPorClick()
{

var xxx = parseInt(texto.value);
//alert("alto" + texto.value);

var lineas= xxx;
var l = 0;
var yi, xf;
var yf, xi;
var xf2;
var colores = "blue"; 
var espacio = ancho / lineas;

 for(i = 0; i < lineas; i++)
 {
	yi= espacio * i;
    xf= espacio * (i + 1);
	dibujarLinea(colores,0,yi,xf,300);
	console.log("linea" + i);
   
 }

 // while(l < lineas)
//  {
// 	yi= 10 * l;
//     xf= 10 * (l + 1);
// 	dibujarLinea(colores,0,yi,xf,300);
// 	console.log("linea" + l);
//     l = l+1; 
//     //l++;

//     //console.log("linea" + l); ---comprovar ciclo
//     // l = l+1; la variable l se le sumara 1 cada vez que se ejecute el codigo, hasta cumplir la condicion
//     //es decir, hasta que el codigo se repita 30 veces, que es el valor de la variable lineas
//  }

 // for(l = 0; l < lineas; l++)
 // {
 //    yf = yi = 10 * l;
 //    xi = xf = 10 * (l + 1);
 //    xf2 = xi2 = 290 - (l * 10);
    

	// dibujarLinea(colores,xi,0,300,yf);
	// dibujarLinea(colores,0,yi,xf,300);
	// dibujarLinea(colores,300,yi,xf2,300);
	// dibujarLinea(colores,xi2,0,0,yf);
	// console.log("linea" + l);

 // }

}


var d = document.getElementById("dibujo");
var lienzo = d.getContext("2d");
var ancho = d.width;


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal){

	lienzo.beginPath();
	lienzo.strokeStyle = color;
	lienzo.moveTo(xinicial, yinicial);
	lienzo.lineTo(xfinal, yfinal);
	lienzo.stroke();
	lienzo.closePath()
}
