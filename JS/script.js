function saludar (){
    alert("Bienvenidos al himalaya");
}

function suma(){
   var a = 5;
   var b = 10;
   var c = a + b;
   alert ("El resultado de la suma "+ a + " + " + b + " es = " + c);
}

function resta(){
   var a = 5;
   var b = 10;
   var c = b - a;
   alert ("El resultado de la resta "+ b + " - " + a + " es = " + c);
}

function multiplicacion(){
   var a = 5;
   var b = 10;
   var c = a * b;
   alert ("El resultado de la multiplicacion "+ a + " * " + b + " es = " + c);
}

function division(){
   var a = 5;
   var b = 10;
   var c = b / a;
   alert ("El resultado de la division "+ b + " / " + a + " es = " + c);
}

function concaMundo (){
   const a = "Hola";
   let	b = " mundo!";
   alert("Constante a contiene " + a );
   alert("Variable b contiene " + b );
   alert(a + b );
}

function cambioNum () {
   let num1=0;
   let num2=0;
   num1 = num1 + 1;
   num2 = num2 + 5;
   alert (`El primer numero ahora es ${num1} `);
   alert (`El segundo numero ahora es ${num2} ` );
}

function producto() {
   let a, b;
   a = 2;
   b = 8;
   resultado = a * b;
   alert(`Variable a contiene ${a} ` );
   alert(`Variable b contiene ${b} ` );
   alert(`El producto de a por b es ${resultado} `);
}

function saludo() {
   let dato, resultado;
   dato = window.prompt("Introduce tu nombre", "0");
   resultado = `Hola, como estas ${dato} ` ;
   alert(resultado);
}

function dobleNum() {
   let dato, num;
   dato = window.prompt("Introduce número plis", "0");
   num = parseInt(dato);
   num = num *2;
   alert(`El doble es ${num} `);
}

function sumaPer() {
   let dato1, dato2, num1, num2;
   dato1 = window.prompt("Introduce primer número", "0");
   num1 = parseInt(dato1);
   dato2 = window.prompt("Introduce segundo número", "0");
   num2 = parseInt(dato2);
   let resultado = num1 + num2;
   alert(`La suma es ${resultado} ` );
}

function muestraDob() {
   let dato, num;
   dato = window.prompt("Introduce un número", "0");
   num = parseInt(dato);
   let resultado = num *2;
   document.getElementById("salida").innerHTML = (`El doble es ${resultado} `);
}

function restaPer() {
   let num1, num2, num3;
   num1 = window.prompt("Introduce el primer número", "0");
   num2 = window.prompt("Introduce el segundo número", "0");
   num3 = parseInt(num1) - parseInt(num2);
   alert(`La resta es ${num3} `);
}